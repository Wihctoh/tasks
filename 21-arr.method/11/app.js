// На входе n – количество элементов массива. Далее производится заполнение
// массива с клавиатуры. Выведите произведение всех элементов массива.
// Проверки на ввод только чисел. Использовать forEach, reduce

const n = 5;
let arr = [];

for (let i = 0; i < n; i++) {
  let pr = prompt("введите элемент");
  if (!isNaN(pr)) {
    arr.push(pr);
  }
}

// const result = arr.reduce(function (b, el) {
//   return b * el;
// }, 1);

// console.log(result);

// let result = 1;

// arr.forEach(function (el) {
//   result *= el;
// });

// console.log(result);

// let result = 1;

// for (let i = 0; i < n; i++) {
//   result *= arr[i];
// }

let result = 1;
let i = 0;

while (i < n) {
  result *= arr[i];
  i++;
}

console.log(result);
