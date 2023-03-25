const mongoose = require("mongoose");

const tweetSchema = mongoose.Schema(
  {
    content: {
      type: String,
      required: true,
      max: [250, "Tweet cant be more than 250 character"],
    },
    hastags: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Hastag",
      },
    ],
  },
  { timestamps: true }
);

const Tweet = mongoose.model("Tweet", tweetSchema);

module.exports = Tweet;
