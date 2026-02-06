import redis from "../config/redis.js";
import { fetchProducts } from "./product.service.js";

export const listProducts = async (req, res) => {
  const cacheKey = "products:list";

  // 🔹 STEP 1: Try Redis ONLY if it exists
  if (redis) {
    try {
      const cached = await redis.get(cacheKey);
      if (cached) {
        return res.json(JSON.parse(cached));
      }
    } catch (err) {
      console.warn("⚠️ Redis read failed, falling back to DB");
    }
  }

  // 🔹 STEP 2: Fetch from database
  const products = await fetchProducts();

  // 🔹 STEP 3: Store in Redis if available
  if (redis) {
    try {
      await redis.setex(cacheKey, 60, JSON.stringify(products));
    } catch (err) {
      console.warn("⚠️ Redis write failed");
    }
  }

  // 🔹 STEP 4: Send response
  res.json(products);
};
