import express from "express";
import cors from "cors";
import authRoutes from "./auth/auth.routes.js";
import productRoutes from "./products/product.routes.js";
import { errorHandler } from "./middlewares/error.middleware.js";
import { limiter } from "./middlewares/rateLimit.middleware.js";

const app = express();
app.use(cors());
app.use(express.json());
app.use(limiter);

app.use("/auth", authRoutes);
app.use("/api/products", productRoutes);
app.use(errorHandler);

export default app;

