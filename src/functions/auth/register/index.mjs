const registerUser = async (event) => {
  const user = JSON.parse(event.body());

  const response = await registerUserService(user);

  return response;
};
