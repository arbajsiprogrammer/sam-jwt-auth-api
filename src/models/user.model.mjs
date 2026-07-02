import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    fname: {
      type: String,
      required: true,
      min: [3, "min length should be 3"],
    },

    lname: {
      type: String,
      required: true,
      min: [3, "min length should be 3"],
    },

    email: {
      type: String,
      unique: true,
      required: true,
    },

    password: {
      type: String,
      required: true,
      min: [6, "min length should be 6"],
    },
  },
  { timeStamps: true },
);

const User = mongoose.model("User", userSchema);

export { User };
