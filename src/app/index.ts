import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("hell wold");
});

export default app;
