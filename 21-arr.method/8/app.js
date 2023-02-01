// На входе n – количество элементов массива. Далее производится заполнение
// массива с клавиатуры. Если все элементы массива – числа, то вывести логическое
// true, в противном случае false. Every, forEach

const num = 5;
const arr = [];

for (let i = 0; i < 5; i++) {
  let pr = prompt("введите число");
  arr.push(pr);
}

arr.forEach(function (el) {
  if (!isNaN(el)) {
    console.log(true);
  } else console.log(false);
});

// const result = arr.every(function (el) {
//   if (!isNaN(el)) {
//     console.log(true);
//   } else console.log(false);
// });

// console.log(arr);
