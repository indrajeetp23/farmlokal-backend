import Product from "./product.model.js";

export const fetchProducts = async () => {
  return Product.find({ isAvailable: true })
    .limit(20)
    .lean(); // performance optimization
};
