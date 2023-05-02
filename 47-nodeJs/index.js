const express = require("express");
const send = require("send");

const app = express();

const port = 3000;

app.get("/", (request, response) => {
  const arr = [1, 1, 2, 3, 4, 4, 5, 6, 7];
  let resArr = [];

  for (let i = 0; i < arr.length; i++) {
    if (!resArr.includes(arr[i])) {
      resArr.push(arr[i]);
    }
  }

  response.send(resArr);
});

app.get("/:id", (request, response) => {
  const { id } = request.params;

  const arr = [1, 2, 3, 4, 5, 6];
  const resArr = [];
  let itemArr = [];

  for (let i = 0; i < arr.length; i++) {
    itemArr.push(arr[i]);

    if (id == itemArr.length) {
      resArr.push(itemArr);
      itemArr = [];
    }
  }
  response.send(resArr);
});

app.get("/contact", (request, response) => response.send("+37522000000"));

app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
