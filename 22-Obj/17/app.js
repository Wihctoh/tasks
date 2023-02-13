// Найти значение массива, повторяющееся в нем наибольшее количество раз

const arr = [1, 2, 2, 2, 3, 4, 5, 5].sort();
let count = {};

for (let elem of arr) {
  if (count[elem] === undefined) {
    count[elem] = 1;
  } else {
    count[elem]++;
  }
}

let arr1 = [];

for (const key in count) {
  arr1.push(count[key]);
}

console.log(Math.max.apply(null, arr1));
