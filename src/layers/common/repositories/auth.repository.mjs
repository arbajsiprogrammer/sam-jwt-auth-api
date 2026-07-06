import { User } from "/opt/models/user.model.mjs";
import { ApiError } from "/opt/utils/ApiError.mjs";

const createUser = async (userData) => {
  console.log("createUser");
  const response = await User.create(userData);
  return response;
};

const findByEmail = async (email) => {
  console.log("findByEmail");
  const response = await User.findOne({ email });
  console.log("findByEmail : ", response);
  return response;
  // return undefined;
};
export { createUser, findByEmail };
