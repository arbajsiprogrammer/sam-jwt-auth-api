import { successResponse } from "../../../utils/api.response.mjs";

const registerUser = async (event) => {
  const user = JSON.parse(event.body());

  const response = await registerUserService(user);

  return successResponse(201, "user created successfully", response);
};
