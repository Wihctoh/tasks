// Пользователь вводит имя фамилию. Необходимо создать функцию
// возвращающую строку вида «Привет, {имя} {фамилия}»
const firstName = "evgen";
const lastName = "zh";

function names(firstName, lastName) {
  return `Привет ${firstName} ${lastName}`;
}

let result = names(firstName, lastName);

console.log(result);
