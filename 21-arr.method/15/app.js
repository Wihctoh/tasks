// Пользователь вводит 6 значений и распределяет их поровну между 2 массивами.
// Cоздать новый массив, добавить туда значения всех массивов. Spread

const n = 6;
let arr1 = [];
let arr2 = [];

for (let i = 0; i < n; i++) {
  let a = prompt();
  if (i < n / 2) {
    arr1.push(a);
  } else arr2.push(a);
}

let result = [...arr1, ...arr2];

console.log(result);
