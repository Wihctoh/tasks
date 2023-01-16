// Пользователь вводит строку. Необходимо посчитать количество гласных

const str = prompt("введите строку").trim().toLowerCase().split("");
let count = 0;

for (let i = 0; i < str.length; i++) {
  if (
    str[i] == "a" ||
    str[i] == "e" ||
    str[i] == "i" ||
    str[i] == "o" ||
    str[i] == "u" ||
    str[i] == "y" ||
    str[i] == "ё" ||
    str[i] == "е" ||
    str[i] == "ю" ||
    str[i] == "я" ||
    str[i] == "ы" ||
    str[i] == "э" ||
    str[i] == "и" ||
    str[i] == "о" ||
    str[i] == "у" ||
    str[i] == "а"
  ) {
    count += 1;
  }
}

console.log(str.join(""));
console.log(`Количество гласных букв в строке: ${count}`);
