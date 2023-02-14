// На входе n – количество элементов массива. Далее производится заполнение
// массива с клавиатуры. Напишите функцию, которая принимает массив строк и
// находим там наибольшее по длине текстовое значение. Добавить проверки

const n = 3;

function doArray(n_) {
  let arr = [];

  for (let i = 0; i < n_; i++) {
    let pr = prompt("");

    arr.push(pr);
  }
  return arr;
}

function findMax(array_) {
  let maxLength = 0;
  let value = "";

  for (let i = 0; i < array_.length; i++) {
    if (array_[i].length > maxLength) {
      maxLength = array_[i].length;
      value = array_[i];
    }
  }

  return value;
}

let array = doArray(n);
let result = findMax(array);

console.log(result);
