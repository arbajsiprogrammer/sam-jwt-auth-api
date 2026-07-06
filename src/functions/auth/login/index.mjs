import { lambdaHandler } from "/opt/utils/lambdaHandler.util.mjs";
import { logInUserService } from "/opt/services/auth.service.mjs";
import { successResponse } from "/opt/utils/api.response.mjs";

const logInUser = async (event) => {
  const user = JSON.parse(event.body);

  const token = await logInUserService(user);

  return await successResponse(200, "logIn successful", {
    AccessToken: token,
  });
};

const handler = async (event) => {
  return await lambdaHandler(event, logInUser);
};

export { handler };
