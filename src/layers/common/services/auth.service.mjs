import { createUser, findByEmail } from "/opt/repositories/auth.repository.mjs";
import { ApiError } from "/opt/utils/ApiError.mjs";
import { hashPassword } from "/opt/utils/hash.util.mjs";
import { signToken } from "/opt/utils/jwt.util.mjs";
import { schema } from "/opt/validators/auth.validator.mjs";

const registerUserService = async (user) => {
  console.log("user inside registerUserService ", user);
  const result = await schema.validateAsync(user);

  if (result.error) {
    throw new ApiError(400, result.error);
  }

  // check if existing user or not
  const dbUser = await findByEmail(user.email);

  if (dbUser) {
    throw new ApiError(400, "user with this email already exist");
  }
  console.log("passed by findByEmail");
  // hash the password
  const hashedPassword = await hashPassword(user.password);

  console.log("passed by hashedPassword ", hashedPassword);
  // store into DB

  const response = await createUser({ ...user, password: hashedPassword });

  console.log("passed by response ", response);

  return response;
};

const logInUserService = async (user) => {
  const dbUser = await findByEmail(user.email);

  if (!dbUser) {
    throw new ApiError(404, "user not found");
  }

  const token = await signToken({ _id: dbUser._id });

  return token;
};

export { registerUserService, logInUserService };
