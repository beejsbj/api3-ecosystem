import mongoose from "mongoose";
import { Nitro } from "nitropack";

export default async (_nitroApp: Nitro) => {
  const config = useRuntimeConfig();

  try {
    await mongoose.connect(config.mongodbURI);
    console.log("db connected:");
  } catch (err) {
    console.log("mongodb connection error ", err);
  }
};
