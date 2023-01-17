// На вход подаются 2 строки. Необходимо сравнить их и если они одинаковы, то
// вывести true, в противном случае false.
// 'string', 'StRiNg' -> true

const str = prompt("введите строку 1").trim().toLowerCase();
const str_1 = prompt("введите строку 2").trim().toLowerCase();

if (str === str_1) {
  console.log(true);
} else console.log(false);
