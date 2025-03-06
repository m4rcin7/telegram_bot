const express = require("express");
const PORT = process.env.PORT || 4040;

const app = express();
app.use(express.json());

app.post("*", (req, res) => {
  res.send("Hello post!");
});

app.get("*", (req, res) => {
  res.send("Hello get!");
});

app.listen(PORT, () => {
  // if (err) {
  //   console.log(err);
  // }
  console.log(`Server listening on PORT ${PORT}`, PORT);
});
