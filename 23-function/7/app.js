// На входе массив. Реализуйте 2 функции. Первая для проверки, что в массиве
// только числа. Вторая для получения суммы всех элементов массива. Если
// результат функции проверки – true, то вызывать новую функцию, возвращающую
// сумму всех элементов массива

const arr = [1, 2, 3, 1];

function isNumber(arr_) {
  let res = arr_.every(function (el) {
    if (!isNaN(el)) {
      return true;
    } else false;
  });

  return res;
}

function sumElArr(arr__) {
  let sums = 0;

  for (let i = 0; i < arr__.length; i++) {
    if (isNumber(arr__) == true) {
      sums += arr__[i];
    }
  }
  return sums;
}

let result = isNumber(arr);
let sum = sumElArr(arr);

console.log(sum);
