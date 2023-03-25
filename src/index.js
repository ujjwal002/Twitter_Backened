const express = require("express");
const connection = require("./config/database");
const app = express();

app.listen(4000, async () => {
  console.log(`server started at ${3000}`);
  await connection();
  console.log("connection successful");
});
