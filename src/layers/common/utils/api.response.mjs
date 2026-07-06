const successResponse = (statusCode, message, data) => {
  return {
    statusCode,
    body: JSON.stringify({
      success: true,
      statusCode: statusCode,
      message,
      data: data,
    }),
  };
};

const errorResponse = (statusCode, error) => {
  return {
    statusCode,
    body: JSON.stringify({
      success: false,
      statusCode: statusCode,
      message: error.message || error,
      data: null,
    }),
  };
};

export { successResponse, errorResponse };
