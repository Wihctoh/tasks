// Пользователь вводит строку. Необходимо посчитать количество гласных

const str = prompt("введите строку").trim().toLowerCase().split("");
let count = 0;

for (let i = 0; i < str.length; i++) {
  if (
    str[i] == "a" ||
    str[i] == "e" ||
    str[i] == "i" ||
    str[i] == "o" ||
    str[i] == "u"
  ) {
    count += 1;
  }
}

console.log(str.join(""));
console.log(`Количество гласных букв в строке: ${count}`);
