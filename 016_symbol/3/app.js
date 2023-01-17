// На вход подаются 2 строки. Если исходная 1 строка заканчивается на 2 строку
// вывести true, в противном случае false

const str = prompt("введите строку 1");
const str_1 = prompt("введите строку 2");

if (str.endsWith(str_1)) {
  console.log(true);
} else console.log(false);
