import { User } from "../models/user.model.mjs";
import { ApiError } from "../utils/ApiError.mjs";

const createUser = async (userData) => {
  try {
    const response = await User.create(userData);
    return response;
  } catch (error) {
    console.log(error);
    throw new ApiError(500, error.message);
  }
};

const findByEmail = async (email) => {
  try {
    const response = await User.findOne({ email });
    return response;
  } catch (error) {
    console.log(error);
    throw new ApiError(500, error.message);
  }
};
export { createUser, findByEmail };
