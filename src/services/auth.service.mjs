import {
  createUser,
  findByEmail,
  registerUserRepository,
} from "../repositories/auth.repository.mjs";
import { ApiError } from "../utils/ApiError.mjs";
import { hashPassword } from "../utils/hash.mjs";
import { schema } from "../validators/auth.validator";

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
