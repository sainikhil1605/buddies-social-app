const express = require("express");
const { signUp, login } = require("./controllers");
const app = express();
app.use(express.json());
app.post("/signup", signUp);
app.post("/login", login);
app.listen(3001, () => {
  console.log("Auth service is running on port 3001   ");
});
