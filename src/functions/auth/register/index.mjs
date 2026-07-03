import { registerUserService } from "/opt/nodejs/services/auth.service.mjs";
import { successResponse } from "/opt/nodejs/utils/api.response.mjs";
import { connectToMongoDB } from "/opt/nodejs/utils/db.util.mjs";

const registerUser = async (event) => {
  await connectToMongoDB();

  const user = JSON.parse(event.body);

  const response = await registerUserService(user);

  return successResponse(201, "user created successfully", response);
};
