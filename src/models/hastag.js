import mongoose from "mongoose";

const hastagSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    tweets: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Tweet",
      },
    ],
  },
  { timestamps: true }
);

const Hastag = mongoose.model("Hastag", hastagSchema);

export default Hastag;
