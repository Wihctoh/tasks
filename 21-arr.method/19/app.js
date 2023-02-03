// На входе n – количество элементов массива. Далее производится заполнение
// массива с клавиатуры (хотя бы один элемент массива – 0). Необходимо вывести
// сумму всех значений массива до первого 0. Добавить проверки на ввод чисел.

const elem = 5;
let arr = [];

for (let i = 0; i < elem; i++) {
  let pr = +prompt("введите элемент");
  if (!isNaN(pr)) {
    arr.push(pr);
  }
}

let result = [];

for (let i = 0; i < arr.length; i++) {
  if (arr[i] !== 0) {
    result.push(arr[i]);
    continue;
  } else break;
}

let summ = result.reduce(function (sum, el) {
  return sum + el;
}, 0);

console.log(summ);
