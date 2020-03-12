const express = require("express");
// const path = require("path");
const { getTotal, addItem } = require("./app.js");
const bodyParser = require("body-parser");
const app = express();
const port = process.env.PORT || 3010;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000");
  res.header(
    "Allow-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.get("/data", async (req, res) => {
  const totalItems = await getTotal();

  console.log(totalItems);
  res.send({
    data: totalItems
  });
});

app.post("/register", (req, res) => {
  addItem(req.body.item);
});

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
