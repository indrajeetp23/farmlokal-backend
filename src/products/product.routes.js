import express from "express";
import { listProducts } from "./product.controller.js";
import authMiddleware from "../middlewares/auth.middleware.js";

const router = express.Router();

router.get("/", authMiddleware, listProducts);

export default router;
