// Ввести строку. Проверить является ли это число или строка. Если число, то
// ошибка ввода. Если это строка то первый символ поставить в верхний регистр.
// Убрать лишние пробелы

const a = prompt("").trim().toLowerCase();

if (isNaN(a)) {
  console.log(a[0].toUpperCase() + a.slice(1));
} else {
  console.log("error");
}

console.log(isNaN(a) ? a[0].toUpperCase() + a.slice(1) : "error");
