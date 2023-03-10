const express = require("express");
const mongoose = require("mongoose");
const Plant = require("./Models/plantModel");
const User = require("./Models/userModel");
const Favorite = require("./Models/favoriteModel");
const app = express();

//user password encryption
var bcrypt = require('bcryptjs');

//jwt authentication
const jwt = require("jsonwebtoken");

//set dot-env variables
require("dotenv").config();
const { MONGO_GT, PORT } = process.env;
const secretWord = "secretword";

//cors
var cors = require("cors");
app.use(cors());

//specify middleware
app.use(express.json());

//routes
app.get("/", (req, res) => {
  res.send("<h1>Green Thumb</h1>");
});

/////////////////////////////////////////User

//add user
app.post("/api/signup", async (req, res) => {
  try {
    const newPassword = await bcrypt.hash(req.body.password, 10);
    await User.create({
      name: req.body.name,
      email: req.body.email,
      password: newPassword,
    });

    const token = jwt.sign(
      {
        name: req.body.name,
        email: req.body.email,
      },
      secretWord
    );

    res.json({ status: "ok", token: token });
  } catch (err) {
    console.error(err);
    res.status(500).json({ status: "error", message: "Error creating user." });
  }
});

// allow registered user to signIn
app.post("/api/login", async (req, res) => {
  const user = await User.findOne({
    email: req.body.email,
  });

  if (!user) {
    return res.json({ status: "error", message: "User not found" });
  } else {
    const isPasswordValid = await bcrypt.compare(
      req.body.password,
      user.password
    );
    if (isPasswordValid) {
      const token = jwt.sign(
        {
          name: user.name,
          email: user.email,
          avatar: user.avatar,
        },
        secretWord
      );

      return res.json({ status: "ok", token: token });
    } else {
      return res.json({ status: "error", message: "Invalid password" });
    }
  }
});

//Get specific user by ID
app.get("/profile/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findById(id);
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

///////////for profile page/////////////////////////
//Get specific user by ID
app.get("/profile/:id", authenticateToken, async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findById(id);

    // ensure that the user ID in the JWT token matches the requested profile ID
    if (user && user._id.toString() === req.user.userId) {
      res.status(200).json(user);
    } else {
      res.status(403).json({ message: "Access denied" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

function authenticateToken(req, res, next) {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];
  if (token == null) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  jwt.verify(token, secretWord, (err, user) => {
    if (err) {
      return res.status(403).json({ message: "Access denied" });
    }

    req.user = user;
    next();
  });
}





//Add plant to database
app.post("/plants", async (req, res) => {
  try {
    const plant = await Plant.create(req.body);
    res.status(200).json(plant);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
});

// Add favorite to database
app.post("/favorites", async (req, res) => {
  try {
    const favorite = await Favorite.create(req.body);
    res.status(200).json(favorite);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
});

// Add favorite to database by id
app.post("/favorites/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const favorite = await Favorite.create({ plant_id: id });
    res.status(200).json(favorite);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
});

//Get plant from database
app.get("/plants", async (req, res) => {
  try {
    const plants = await Plant.find({});
    res.status(200).json(plants);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get favorites from database
app.get("/favorites", async (req, res) => {
  try {
    const favorites = await Favorite.find({});
    res.status(200).json(favorites);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

//Get specific plantt by ID
app.get("/plants/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const plant = await Plant.findById(id);
    res.status(200).json(plant);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get specific favorite by ID
app.get("/favorites/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const favorite = await Favorite.findById(id);
    res.status(200).json(favorite);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

//Update or Edit data in database
app.put("/plants/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const plant = await Plant.findByIdAndUpdate(id, req.body);
    //we cannot find that product to update
    if (!plant) {
      return res
        .status(404)
        .json({ message: `cannot find product with ID ${id}` });
    }
    const updatedPlant = await Plant.findById(id);
    res.status(200).json(updatedPlant);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Update a favorite by ID
app.put("/favorites/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const favorite = await Favorite.findByIdAndUpdate(id, req.body);
    if (!favorite) {
      return res
        .status(404)
        .json({ message: `cannot find favorite with ID ${id}` });
    }
    const updatedFavorite = await Favorite.findById(id);
    res.status(200).json(updatedFavorite);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
});

//Delete/Remove data from DB
app.delete("/plants/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const plant = await Plant.findByIdAndDelete(id);
    if (!plant) {
      return res
        .status(404)
        .json({ message: `cannot find product with ${id}` });
    }
    res.status(200).json(plant);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Delete a favorite by ID
app.delete("/favorites/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const favorite = await Favorite.findByIdAndDelete(id);
    if (!favorite) {
      return res
        .status(404)
        .json({ message: `cannot find favorite with ID ${id}` });
    }
    res.status(200).json(favorite);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
});

//run your server
app.listen(PORT, () => {
  console.log(`Node API is running on port ${PORT}`);
});

//connect to db
mongoose.set("strictQuery", false);
mongoose
  .connect(MONGO_GT, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to DataBase");
  });
