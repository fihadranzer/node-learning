const mongoose = require("mongoose");
const { Schema } = mongoose;

// SCHEMA - Schema

const productSchema = new Schema({
  title: {type:String, required:true},
  description: String,
  price: Number,
  discountPercentage: Number,
  rating: {type:Number, min:[0, "Wrong Min Rating"], max:[5, "Rating should not more than 5"]},
  brand: String,
  category: String,
  thumbnail: String,
  images: [String],
});

// Model

exports.Product = mongoose.model("Product", productSchema);
