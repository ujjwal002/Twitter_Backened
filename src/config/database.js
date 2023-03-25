import mongoose from "mongoose";

export const connection = async () => {
  await mongoose.connect("mongodb://localhost:27017/twitter_Dev");
};
