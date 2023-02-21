const express = require("express");
const mongoose = require('mongoose');
const app = express();

//set dot-env variables
require('dotenv').config()
const {  MONGO_GT } = process.env;

//specify middleware
app.use(express.json())


//routes
app.get('/', (req, res) => {
    res.send('Green thumb')
  })

app.post('/plantAddd', (req, res) => {
    console.log(req.body)
    res.send(req.body)
})


//run your server
app.listen(8000, () => {
  console.log(`Node API is running on port 8000`)
});

//connect to db
mongoose.set("strictQuery", false)
mongoose
  .connect(MONGO_GT, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to DataBase");
  });