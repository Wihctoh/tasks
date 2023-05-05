const express = require("express");
const {
  getAllData,
  getDataById,
  createData,
  updateData,
} = require("./service");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.json());

app.get("/", (req, res) => {
  const date = getAllData();
  res.send(date);
});

app.get("/:id", (req, res) => {
  const { id } = req.params;
  const data = getDataById(id);
  res.send(data);
});

app.post("/", (req, res) => {
  const { name, age } = req.body;
  const data = createData(name, age);
  res.send(data);
});

app.put("/:id", (req, res) => {
  const { id } = req.params;
  const { name, age } = req.body;
  const data = updateData(id, name, age);

  res.send(data);
});

app.listen(3000, () => {
  console.log("server is running");
});
