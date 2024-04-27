import { Response } from "express";

const app = require("express")();

app.get("/", (req: Request, res: Response) => {
  res.send("Hello from login service!");
});

app.listen(3001, () => {
  console.log("Login service is running on port 3000");
});
