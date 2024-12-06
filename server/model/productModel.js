const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    productName: String,
    brandName: String,
    category: String,
    productImages: [],
    description: String,
    price: Number,
    sellingPrice: Number,
  },
  { timestamps: true }
);

const productModel= mongoose.model("Product", productSchema);



module.exports= productModel;