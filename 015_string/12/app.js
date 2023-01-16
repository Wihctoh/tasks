// Пользователь вводит дату в формате ‘х-х-х'. Замените все дефисы на '!'

const date = prompt("введите дату в формате х-х-х").trim().toLowerCase();

if (isNaN(date)) {
  console.log(date.replaceAll("-", "!"));
} else console.log("error");

console.log(isNaN(date) ? date.replaceAll("-", "!") : "error");
