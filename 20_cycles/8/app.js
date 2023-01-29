// Дан массив с элементами [1, 2, 2, 3, 4, 4, 3, 4, 5]. Выведите каждый элемент массива
// без повторений -> [1, 2, 3, 4, 5] (for, for of)

const arr = [1, 2, 2, 3, 4, 4, 3, 4, 5];
let res = [];

for (let i of arr) {
  if (!res.includes(i)) {
    res.push(i);
  }
}
console.log(res);

// for (let i = 0; i < arr.length; i++) {
//   if (!res.includes(arr[i])) {
//     res.push(arr[i]);
//   }
// }
// console.log(res);
