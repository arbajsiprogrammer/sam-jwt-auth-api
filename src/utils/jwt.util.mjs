import jwt from "jsonwebtoken";
import { ApiError } from "./ApiError.mjs";

const signToken = async (payload) => {
  try {
    const SECRET_KET = process.env.SECRET_KET;
    const JWT_EXPIRY = process.env.JWT_EXPIRY;

    const token = await jwt.sign(payload, SECRET_KET, {
      expiresIn: JWT_EXPIRY,
    });

    return token;
  } catch (error) {
    console.log(error);
    throw new ApiError(500, error.message);
  }
};

export { signToken };
