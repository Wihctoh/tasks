// Ввести строку. Проверить на isNaN. Если число, то ошибка ввода. Если это строка
// то узнать какая у нее длина. Привести к одному регистру, убрать лишние пробелы

const srt = prompt("").trim().toLowerCase();

if (isNaN(srt)) {
  console.log(srt.length);
} else {
  console.log("error");
}

console.log(isNaN(srt) ? console.log(srt.length) : console.log("error"));
