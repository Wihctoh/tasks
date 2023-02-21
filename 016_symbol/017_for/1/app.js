// Дана строка в виде числа. Необходимо просуммировать все элементы числа
// ‘123’ -> 6
// ‘111111111111’ -> 12

const str = "12345";
let result = 0;

for (let i = 0; i < str.length; i++) {
  result += +str[i];
}

console.log(result);
