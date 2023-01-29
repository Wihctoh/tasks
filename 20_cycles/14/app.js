// Дан массив числами, например: [10, 20, 30, 50, 235, 3000]. Выведите на экран только
// те числа из массива, которые начинаются на цифру 1, 2 или 5 -> 10, 20, 50, 235

const arr = ["10", "20", "30", "50", "235", "3000"];
let res = [];

// for (let i = 0; i < arr.length; i++) {
//   if (arr[i][0] == "1" || arr[i][0] == "2" || arr[i][0] == "5") {
//     res.push(arr[i]);
//   }
// }
// console.log(res);

// for (let el of arr) {
//   if (el[0] == "1" || el[0] == "2" || el[0] == "5") {
//     res.push(el);
//   }
// }
// console.log(res);

// let i = 0;
// while (i < arr.length) {
//   if (arr[i][0] == "1" || arr[i][0] == "2" || arr[i][0] == "5") {
//     res.push(arr[i]);
//   }
//   i++;
// }
// console.log(res);

let i = 0;

do {
  if (arr[i][0] == "1" || arr[i][0] == "2" || arr[i][0] == "5") {
    res.push(arr[i]);
  }
  i++;
} while (i < arr.length);
console.log(res);
