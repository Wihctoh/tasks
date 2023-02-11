// Написать функцию, принимающую в параметрах строку текста в маленьком
// регистре. Разбить строку на массив. Функция должна вернуть строку, где каждый
// элемент массива в чередование регистров toLowerCase, toUpperCase
// hschool -> HsChOoL

const str = "hschool".trim().toLowerCase().split("");
let result = [];

let arr1 = str.filter(function (el, index) {
  if (index % 2 == 0) {
    return el;
  }
});

arr1 = arr1.join("").toUpperCase().split("");

let arr2 = str.filter(function (el, index) {
  if (index % 2 !== 0) {
    return el;
  }
});

for (let i = 0; i < str.length; i++) {
  result.push(arr1[i]);

  if (result.includes(arr1[i])) {
    result.push(arr2[i]);
  }
}

result = result.join("");

console.log(result);

