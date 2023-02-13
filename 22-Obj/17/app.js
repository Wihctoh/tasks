// Найти значение массива, повторяющееся в нем наибольшее количество раз

const arr = [1, 2, 2, 2, 3, 4, 5, 5].sort();
let res = [];
let count = 0;

for (let i = 0; i < arr.length; i++) {
  arr.forEach(function (el) {
    if (!res.includes(el)) {
      res.push(el);
    }
  });
}

console.log(res);
