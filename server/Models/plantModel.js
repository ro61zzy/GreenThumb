const { Schema, model } = require("mongoose");

const plantSchema = Schema(
  {
    image: { type: String, required: true },
    name: { type: String, required: true },
    price: { type: String, required: true },
    description: { type: String, required: true },
    details: { type: Object, required: true },
    seller_phone: { type: String, required: true }
  },
  { timestamps: true }
);

const Plant = model("Plant", plantSchema);

module.exports = Plant;
