const mongoose = require('mongoose')

const plantSchema = mongoose.Schema(
    {
        image: { type: String, required: true },
        name: { type: String, required: true },
        price: { type: String, required: true },
        description: { type: String, required: true },        
    }
)

const Plant = mongoose.model('Plant', plantSchema)

module.exports = Plant;