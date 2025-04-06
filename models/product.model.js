const mongoose = require("mongoose");

const ratingSchema = new mongoose.Schema({
  rate: { type: Number, default: 0 },
  count: { type: Number, default: 0 }
}, { timestamps: true });

const productSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: String,
  price: { type: Number, required: true },
  image: String,
  category: { type: mongoose.Schema.Types.ObjectId, ref: "Category" },
  subcategory: String, // optional subcategory
  stock: { type: Number, default: 0 },
  rating: ratingSchema
}, { timestamps: true }); // adds createdAt and updatedAt

module.exports = mongoose.model("Product", productSchema);
