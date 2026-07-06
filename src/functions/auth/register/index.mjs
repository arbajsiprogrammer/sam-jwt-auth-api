import { lambdaHandler } from "/opt/utils/lambdaHandler.util.mjs";
import { registerUserService } from "/opt/services/auth.service.mjs";
import { successResponse } from "/opt/utils/api.response.mjs";
import { connectToMongoDB } from "/opt/utils/db.util.mjs";

const registerUser = async (event) => {
  const user = JSON.parse(event.body);
  console.log("user inside registerUser ", user);
  const response = await registerUserService(user);

  return await successResponse(201, "user created successfully", response);
};

const handler = async (event) => {
  return await lambdaHandler(event, registerUser);
};

export { handler };
