const express = require("express");
const app = express();

//routes
app.get('/', (req, res) => {
    res.send('Green thumb')
  })





app.listen(4000, () => {
  console.log(`Node API is running on port 4000`)
});
