import redis from "../config/redis.js";

export const get = async (key) => {
  const data = await redis.get(key);
  return data ? JSON.parse(data) : null;
};

export const set = async (key, value, ttl) => {
  await redis.setex(key, ttl, JSON.stringify(value));
};


