const express = require("express");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const app = express();

app.use(
  cors({
    origin: "http://localhost:3000",
  })
);

app.get("/", (req, res) => {
  res.send("custom responses");
});

const start = () => {
  try {
    app.listen(8001, () => {
      console.log("app is listeing to port 5000");
    });
  } catch (error) {
    console.log(error);
  }
};

start();
