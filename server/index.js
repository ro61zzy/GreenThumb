const express = require("express");
const mongoose = require("mongoose");
const Plant = require("./Models/plantModel");
const app = express();

//set dot-env variables
require("dotenv").config();
const { MONGO_GT } = process.env;

//cors
var cors = require('cors')
app.use(cors())

//specify middleware
app.use(express.json());

//routes
app.get("/", (req, res) => {
  res.send("Green thumb");
});

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


//Get plant from database
app.get('/plants', async(req, res)=> {
    try{
        const plants = await Plant.find({})
        res.status(200).json(plants);
    }catch (error) {
        
        res.status(500).json({ message: error.message });
      }
})


//Get specific product by ID
app.get('/plants/:id', async(req, res)=> {
    try{
        const {id} = req.params;
        const plant = await Plant.findById(id)
        res.status(200).json(plant);
    }catch (error) {
        
        res.status(500).json({ message: error.message });
      }
})


//Update or Edit data in database
app.put('/plants/:id', async(req, res)=>{
    try{
        const {id} = req.params;
        const plant = await Plant.findByIdAndUpdate(id, req.body)
        //we cannot find that product to update
        if(!plant){
            return res.status(404).json({message: `cannot find product with ID ${id}`})
        }
        const updatedPlant = await Plant.findById(id)
        res.status(200).json(updatedPlant)

    }catch (error){
        res.status(500).json({ message: error.message });
    }
})

//Delete/Remove data from DB
app.delete('/plants/:id', async(req, res)=>{
    try{
        const {id} = req.params;
        const plant = await Plant.findByIdAndDelete(id)
        if(!plant){
            return res.status(404).json({message: `cannot find product with ${id}`})
        }
        res.status(200).json(plant)

    }catch (error){
        res.status(500).json({ message: error.message });
    }
})



//run your server
app.listen(8000, () => {
  console.log(`Node API is running on port 8000`);
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
