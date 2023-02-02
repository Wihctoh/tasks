// На входе n – количество элементов массива. Далее производится заполнение
// массива с клавиатуры. Необходимосоздать новый массив, где каждый элемент
// возведен в квадрат. map

const n = 3;
let arr = [];

for (let i = 0; i < n; i++) {
  let pr = prompt("введите элемент");
  if (!isNaN(pr)) {
    arr.push(pr);
  }
}

// const result = arr.map(function (el) {
//   return el ** 2;
// });

// console.log(result);

let result = [];

arr.forEach(function (el) {
  result.push(el ** 2);
});

console.log(result);
