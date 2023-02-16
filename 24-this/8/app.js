// Напишите функцию, принимающую массив в качестве параметра. Необходимо
// оставить в массиве символы без дубликатов. IIFE
// [1, 1, 2, 2, 2, 3, 4, 5, 5, 5] = [1, 2, 3, 4, 5]

const arr = [1, 1, 2, 2, 2, 3, 4, 5, 5, 5];

let res = (function (arr_) {
  let resArr = [];

  let filterArr = arr_.filter(function (el) {
    if (!resArr.includes(el)) {
      return resArr.push(el);
    }
  });
  return resArr;
})(arr);

console.log(res);
