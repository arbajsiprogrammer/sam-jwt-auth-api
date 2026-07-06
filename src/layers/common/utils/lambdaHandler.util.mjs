import { errorResponse } from "./api.response.mjs";
import { connectToMongoDB } from "/opt/utils/db.util.mjs";

const lambdaHandler = async (event, requestHandler) => {
  try {
    await connectToMongoDB();
    const response = await requestHandler(event);
    return response;
  } catch (error) {
    console.log(error);
    return errorResponse(error.statusCode || 500, error);
  }
};

export { lambdaHandler };
