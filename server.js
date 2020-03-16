const express = require("express");
const { getTotal, addItem, removeItem } = require("./app.js");
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
app.get("/add", async (req, res) => {
  await addItem(req.query.address);
});
app.get("/remove", async (req, res) => {
  console.log(req.query.address)
  await removeItem(req.query.address);
});

app.post("/register", (req, res) => {
  addItem(req.body.item);
});

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
