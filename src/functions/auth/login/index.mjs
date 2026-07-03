import { logInUserService } from "../../../services/auth.service.mjs";
import { successResponse } from "/opt/nodejs/utils/api.response.mjs";
import { connectToMongoDB } from "/opt/nodejs/utils/db.util.mjs";

const logInUser = async (event) => {
  await connectToMongoDB();

  const user = JSON.parse(event.body());

  const token = await logInUserService(user);

  return successResponse(200, "logIn successful", { AccessToken: token });
};
