// Напишите функцию, которая принимает два параметра: строку и букву. Функция
// должна подсчитывать количество вхождений указанной буквы в строке. Добавить
// проверки

const str = "hello, my name is Evgen";
let letter = "h";

function findLetter(str_, letter_) {
  let count = 0;

  for (let i = 0; i < str_.length; i++) {
    str_[i] === letter_ ? count++ : null;
  }

  return count;
}

let result = findLetter(str, letter);

console.log(result);
