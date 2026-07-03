import dotenv from "dotenv";
dotenv.config();
import mongoose from "mongoose";

let isConnected = false;
export async function connectToMongoDB() {
  try {
    if (isConnected) return;
    // already connected do not do anything

    const MONGODB_URI = process.env.MONGODB_URI;
    const connection = await mongoose.connect(MONGODB_URI);
    console.log("You successfully connected to MongoDB!");

    isConnected = true;
    return;
  } catch (err) {
    console.dir(err);
  }
}

// Call this only when your application terminates
export async function disconnectFromMongoDB() {
  await mongoose.connection.close();
}
