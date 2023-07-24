const express = require("express");
const app = express();
const posts = require("./routes/post");
const errorHandler = require("./middlewares/errorHandler");

app.use(express.json()); //middleware that only parses json

// routes
app.use("/posts", posts);

app.use((req, res) => {
  res.status(404).json({
    error: "Bad Url",
  });
});

app.use(errorHandler);

module.exports = app;
