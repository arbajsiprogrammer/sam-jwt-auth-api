import bcrypt from "bcrypt";

const hashPassword = async (password) => {
  const salt = bcrypt.genSalt();
  const hashed = await bcrypt.hash(password, salt);

  return hashed;
};

const comparePassword = async (password, hashed) => {
  const isMatched = await bcrypt.compare(password, hashed);

  return isMatched;
};

export { hashPassword, comparePassword };
