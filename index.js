require("dotenv").config();
const express = require("express");
const { handle } = require("./controller/lib/Telegram");

const PORT = process.env.PORT || 4040;
const app = express();

app.use(express.json());

app.post("/", async (req, res) => {
  console.log(req.body);
  await handle(req, res);
  res.sendStatus(200);
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
