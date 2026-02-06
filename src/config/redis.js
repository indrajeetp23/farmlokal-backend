import Redis from "ioredis";
import { ENV } from "./env.js";

let redis = null;

if (ENV.REDIS_URL) {
  try {
    redis = new Redis(ENV.REDIS_URL, {
      retryStrategy: () => null // ⛔ stop retry spam
    });

    redis.on("connect", () => {
      console.log("✅ Redis connected");
    });

    redis.on("error", () => {
      console.warn("⚠️ Redis not available, cache disabled");
    });
  } catch (err) {
    console.warn("⚠️ Redis initialization failed");
    redis = null;
  }
}

export default redis;

