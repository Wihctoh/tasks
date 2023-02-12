// Написать функцию, принимающую в параметрах строку текста в маленьком
// регистре. Разбить строку на массив. Функция должна вернуть строку, где каждый
// элемент массива в чередование регистров toLowerCase, toUpperCase
// hschool -> HsChOoL

const str = "hschool".split("");

function doCamelCase(str_) {
  let result = "";

  for (let i = 0; i < str_.length; i++) {
    i % 2 === 0 ? (result += str_[i].toUpperCase()) : (result += str_[i]);
  }

  return result;
}

let newStr = doCamelCase(str);

console.log(newStr);
