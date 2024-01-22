require("dotenv").config();
const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/hello", (req, res) => {
  res.send("Hello Tester!! Your program run successfully!");
});
app.get("/login", (req, res) => {
  res.send("<h1>You logged in successfully!</h1>");
});
app.get("/logout", (req, res) => {
  res.send("<h2>You logout from application!</h2>");
});
app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`);
});
