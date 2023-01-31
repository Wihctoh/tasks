// Пользователь вводит многозначное число. Необходимо вставить двоеточие
// между двумя нечетными числами. Работать с числом как с массивом.
// Использовать for
// 55639217 -> 5:563:921:7.

let num = "55639217".split("");
let arr = [];

for (let i = 0; i < num.length; i++) {
  if (i == 0) {
    arr.push(num[i]);
    continue;
  }
  let lastEl = arr[arr.length - 1];

  if (num[i] % 2 !== 0 && lastEl % 2 !== 0) {
    arr.push(":", num[i]);
    continue;
  }
  arr.push(num[i]);
}
console.log(arr.join(""));