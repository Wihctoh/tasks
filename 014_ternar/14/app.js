// Ввести строку. Если эта равна “hschool”, вывести true. В противном случае false.
// Добавить проверки для строк. Удалить лишние пробелы

let a = prompt("введите текст");

if (isNaN(a)) {
  if (a.trim() === "hschool") {
    console.log(true);
  } else {
    console.log(false);
  }
} else {
  console.log("введите текст!");
}
