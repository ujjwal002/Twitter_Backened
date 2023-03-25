const express = require("express");
const connection = require("./config/database");

const app = express();

const TweetRepository = require("./repository/tweet-repository");
const Comment = require("./models/comment");
app.listen(3000, async () => {
  console.log(`server started at ${3000}`);
  await connection();
  console.log("connection successful");
});
