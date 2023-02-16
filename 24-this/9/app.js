// На входе динамичный массив; число n с клавиатуры. Необходимо написать
// функцию, возвращающую элементы массива, которые больше указанного числа.
// [1, 9, 45, 11, 10], 10 -> 45, 11

function doArray() {
  const arr = [];

  for (let i = 0; i < 5; i++) {
    arr.push(prompt(""));
  }
  return arr;
}

function arrCallback(arr_) {
  let n = 10;
  let resArr = [];

  for (let i = 0; i < arr_.length; i++) {
    if (arr_[i] > n) {
      resArr.push(arr_[i]);
    }
  }
  return resArr;
}

let arr = doArray();
let res = arrCallback(arr);

console.log(res);
