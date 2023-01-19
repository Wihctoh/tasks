// Пользователь вводит строку. Необходимо вывести все гласные отдельной строкой
// fullstack => ua

const str = "fullstack".trim().toLowerCase();
let result = "";

for (let i = 0; i < str.length; i++) {
  if (str[i] === "a") {
    result += str[i];
  } else if (str[i] === "e") {
    result += str[i];
  } else if (str[i] === "i") {
    result += str[i];
  } else if (str[i] === "o") {
    result += str[i];
  } else if (str[i] === "u") {
    result += str[i];
  }
}

console.log(result);
