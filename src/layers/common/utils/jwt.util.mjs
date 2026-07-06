import dotenv from "dotenv";
dotenv.config();
import jwt from "jsonwebtoken";
import { ApiError } from "./ApiError.mjs";

const signToken = async (payload) => {
  console.log("process.env", process.env);
  const JWT_SECRET_KEY = process.env.JWT_SECRET_KEY;
  const JWT_EXPIRES_IN = process.env.JWT_EXPIRES_IN;

  console.log("SECRET_KET ", JWT_SECRET_KEY);
  console.log("JWT_EXPIRY ", JWT_EXPIRES_IN);

  const token = await jwt.sign(payload, JWT_SECRET_KEY, {
    expiresIn: JWT_EXPIRES_IN,
  });

  return token;
};

export { signToken };
