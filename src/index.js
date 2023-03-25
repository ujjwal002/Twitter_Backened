import express from "express";
import { connection } from "./config/database.js";
import bodyParser from "body-parser";
import apiRoutes from "./routes/index.js";

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/api", apiRoutes);
import service from "./services/tweet-service.js";
app.listen(4000, async () => {
  console.log(`server started at ${3000}`);
  await connection();
  console.log("connection successful");
  let ser = new service();
  console.log(ser);
  await ser.create({ content: "hii iam ujjwal #kumar" });
});
