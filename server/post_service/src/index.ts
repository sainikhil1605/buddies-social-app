import { Request, Response } from "express";

const express = require("express");

const app = express();

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});

app.listen(3003, () => {
  console.log("Post Service is running on port 3003");
});
