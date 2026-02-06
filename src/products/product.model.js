import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  name: String,
  category: String,
  price: Number,
  supplierId: String,
  isAvailable: Boolean
}, { timestamps: true });

export default mongoose.model("Product", productSchema);
