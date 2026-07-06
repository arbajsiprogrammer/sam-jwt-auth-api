import bcrypt from "bcrypt";

const hashPassword = async (password) => {
  console.log("inside hashPassword", password);
  const hashed = await bcrypt.hash(password, 10);

  console.log("after inside hashPassword", hashed);
  return hashed;
};

const comparePassword = async (password, hashed) => {
  const isMatched = await bcrypt.compare(password, hashed);

  return isMatched;
};

export { hashPassword, comparePassword };
