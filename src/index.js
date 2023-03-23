const express = require("express");
const connection = require("./config/database");

const app = express();

const TweetRepository = require("./repository/tweet-repository");
const Comment = require("./models/comment");
app.listen(3000, async () => {
  console.log(`server started at ${3000}`);
  await connection();
  console.log("connection successful");

  const tweetRepo = new TweetRepository();

  const tweet = await tweetRepo.create({
    content: "Tweet with comment schema",
  });
  console.log(tweet);
  const comment = await Comment.create({ content: "new comments" });

  tweet.comments.push(comment);
  await tweet.save();
  console.log(tweet);
});
