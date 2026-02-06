import mongoose from "mongoose";
import { ENV } from "./env.js";

const connectDB = async () => {
  await mongoose.connect(ENV.MONGO_URI);
  console.log("✅ MongoDB connected");
};

export default connectDB;
