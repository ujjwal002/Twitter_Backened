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

  // const tweet = await tweetRepo.create({
  //   content: "Tweet with comment schema",
  // });
  // console.log(tweet);
  // const comment = await Comment.create({ content: "new comments" });

  // tweet.comments.push(comment);
  // await tweet.save();
  // console.log(tweet);
  // const tweet = await tweetRepo.getAll(2, 4);
  // console.log(tweet);
  // console.log(tweet[0].contentWithEmail);
  const tweet = await tweetRepo.create({ content: "with hooks now" });
  console.log(tweet);
});
