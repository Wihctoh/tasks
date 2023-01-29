// Дан массив 2, 5, 9, 15, 0, 4. Выведите все числа кратные 3 циклом for of

const arr = [2, 5, 9, 15, 0, 4];
let result = [];

// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] % 3 === 0) {
//     result.push(arr[i]);
//   }
// }
// console.log(result);

for (let i of arr) {
  if (i % 3 === 0) {
    result.push(i);
  }
}
console.log(result);
