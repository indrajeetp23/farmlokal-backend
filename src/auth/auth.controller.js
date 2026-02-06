import jwt from "jsonwebtoken";
import { ENV } from "../config/env.js";
import { verifyGoogleToken } from "./oauth.service.js";

export const googleLogin = async (req, res) => {
  const { token } = req.body;

  const user = await verifyGoogleToken(token);

  const accessToken = jwt.sign(
    { email: user.email },
    ENV.JWT_SECRET,
    { expiresIn: "15m" }
  );

  res.json({ accessToken });
};


  