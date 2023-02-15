// Напишите функцию, которая принимает массив чисел и находит минимальное и
// максимальное числа соответственно. Добавить проверки на ввод и если значения
// массива не соответствуют условию задания, вывести сообщение об ошибке.

const numArr = [1, 2, 3, 4, 5, -20];

function isValid(arr_) {
  let res = arr_.every(function (el) {
    if (!isNaN(el)) {
      return true;
    } else return false;
  });
  return res;
}

function MinMaxNum(numArr_) {
  let minNum = 0;
  let maxArr = 0;

  if (isValid(numArr_) === true) {
    for (let i = 0; i < numArr_.length; i++) {
      if (numArr_[i] > maxArr) {
        maxArr = numArr_[i];
      }
    }

    for (let i = 0; i < numArr_.length; i++) {
      if (numArr_[i] < minNum) {
        minNum = numArr_[i];
      }
    }
  } else return "error";

  return [maxArr, minNum];
}

let result = MinMaxNum(numArr);
let isVadilFunc = isValid(numArr);

console.log(result);
