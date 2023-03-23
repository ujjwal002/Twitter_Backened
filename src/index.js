const express = require("express");
const connection = require("./config/database");

const app = express();

const TweetRepository = require("./repository/tweet-repository");
app.listen(3000, async () => {
  console.log(`server started at ${3000}`);
  await connection();
  console.log("connection successful");
  // const tweet = await Tweet.create({
  //   content: "second  tweet",
  //   userEmail: "a@abc",
  // });
  // const tweet = await Tweet.find();
  // const tweet = await Tweet.findById("641c9f7c5a41ac81c80a54c3");
  // tweet.userEmail = "ujjwalsinghrajput2000@gmail.com";
  // await tweet.save();

  const tweetRepo = new TweetRepository();
  // const tweet = await tweetRepo.get("641c9f7c5a41ac81c80a54c3");

  // const tweet = await tweetRepo.update("641c9f7c5a41ac81c80a54c3", {
  //   content: "my tweet is working fine",
  // });

  // const tweet = await tweetRepo.create({ content: "tweet with comments" });

  // tweet.comments.push({ contents: "first commenst" });

  // await tweet.save();

  // console.log(tweet);
});
