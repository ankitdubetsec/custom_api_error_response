const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("custom responses");
});

app.listen(8000, () => {
  console.log("app is listeing to port 8000");
});
