import mongoose from "mongoose";
import { loadEnvConfig } from "@next/env";

const MONGODB_URI = process.env.MONGODB_URI;

loadEnvConfig(process.cwd());

async function connectToDatabase() {
  try {
    await mongoose.connect(MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true,
    });
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error(error.message);
    process.exit(1);
  }
}

export default connectToDatabase;
