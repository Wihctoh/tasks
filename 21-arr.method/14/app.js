// На входе n – количество элементов массива. Далее производится заполнение
// массива с клавиатуры. Необходимо создать новый массив из элементов, каждое
// значение которого имеет вид #name. map, forEach
// [“hschool”, “company”] -> [“#hschool”, “#company”]

const num = 3;
let arr = [];

for (let i = 0; i < num; i++) {
  let pr = prompt("введите элемент");
  arr.push(pr);
}

// let result = [];
// arr.forEach(function (el) {
//   result.push("#" + el);
// });

// console.log(result);

// let result = arr.map(function (el) {
//   return "#" + el;
// });

// console.log(result);

// let result = [];

// for (let i = 0; i < num; i++) {
//   result.push("#" + arr[i]);
// }

// console.log(result);

let result = [];
let i = 0;

while (i < num) {
  result.push("#" + arr[i]);
  i++;
}

console.log(result);
