// На вход подаются 2 строки. Необходимо найти в 1 строке 2 подстроку и вывести
// true, если совпадение есть, в противном случае false

const str = prompt("введите строку 1");
const str_1 = prompt("введите строку 2");

if (str.includes(str_1)) {
  console.log(true);
} else console.log(false);
