import {
  createUser,
  findByEmail,
  registerUserRepository,
} from "/opt/nodejs/repositories/auth.repository.mjs";
import { ApiError } from "/opt/nodejs/utils/ApiError.mjs";
import { hashPassword } from "/opt/nodejs/utils/hash.util.mjs";
import { signToken } from "/opt/nodejs/utils/jwt.util.mjs";
import { schema } from "/opt/nodejs/validators/auth.validator";

const registerUserService = async (user) => {
  try {
    const result = await schema.validateAsync(user);

    if (result.error) {
      throw new ApiError(400, result.error);
    }

    // check if existing user or not
    const dbUser = await findByEmail(user.email);

    if (dbUser) {
      throw new ApiError(400, "user with this email already exist");
    }

    // hash the password
    const hashedPassword = await hashPassword(user.password);

    // store into DB

    const response = await createUser({ ...user, password: hashedPassword });

    return response;
  } catch (err) {
    console.log(err);
    throw new ApiError(500, err.message);
  }
};

const logInUserService = async (user) => {
  try {
    const dbUser = await findByEmail(user.email);

    if (!dbUser) {
      throw new ApiError(404, "user not found");
    }

    const token = signToken({ _id: dbUser._id });

    return token;
  } catch (error) {
    console.log(error);
    throw new ApiError(500, error.message);
  }
};

export { registerUserService, logInUserService };
