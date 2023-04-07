// На входе строка, необходимо убрать все лишние пробелы и привести каждый
// элемент к нижнему регистру. Повторить строку 3 раза. Добавить проверку на ввод
// только текстовых значений

const str = prompt("enter string").trim().toLowerCase().repeat(3);

if (isNaN(str)) {
  console.log(str);
} else {
  console.log("error");
}

console.log(isNaN(str) ? str : "error");
