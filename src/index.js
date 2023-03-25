import express from "express";
import { connection } from "./config/database.js";
const app = express();

import HastagRepository from "./repository/hastag-repository.js";
import service from "./services/tweet-service.js";
app.listen(4000, async () => {
  console.log(`server started at ${3000}`);
  await connection();
  console.log("connection successful");
  let ser = new service();
  console.log(ser);
  await ser.create({ content: "hii iam ujjwal #kumar" });
});
