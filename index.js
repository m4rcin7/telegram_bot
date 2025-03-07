const express = require("express");
const PORT = process.env.PORT || 4040;
const { handler } = require("./controller");

const app = express();
app.use(express.json());

app.post("*", async (req, res) => {
  console.log(req.body);

  res.send(await handler(req));
});

app.get("*", (req, res) => {
  res.send("Hello get!");
});

app.listen(PORT, function (err) {
  if (err) console.log(err);
  console.log(`Server listening on PORT ${PORT}`, PORT);
});
