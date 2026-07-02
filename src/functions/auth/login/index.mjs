import { logInUserService } from "../../../services/auth.service.mjs";
import { successResponse } from "../../../utils/api.response.mjs";

const logIn = async (event) => {
  const user = JSON.parse(event.body());
  const token = await logInUserService(user);
  return successResponse(200, "logIn successful", { AccessToken: token });
};
