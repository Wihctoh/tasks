// Пользователь вводит строку. Применить метод для разбития строки на массив.
// Добавить проверку на ввод только текста

let a = prompt("введите строку");

if (isNaN(a)) {
  console.log(a.split());
} else {
  console.log("введите текст!");
}
