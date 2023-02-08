// На входе массив. Реализуйте 2 функции. Первая для проверки, что в массиве
// только строки. Вторая для получения суммы всех строчных элементов массива.
// Если результат функции проверки – true, то вызывать новую функцию,
// возвращающую конкатенацию всех строчных элементов массива

const arr = ["a", "b", "c"];

function isStr(arr_) {
  let res = arr_.every(function (el) {
    if (isNaN(el)) {
      return true;
    } else false;
  });

  return res;
}

function sumEl(arr__) {
  let res = "";

  for (let i = 0; i < arr__.length; i++) {
    if (isStr(arr__) == true) {
      res += arr__[i];
    }
  }
  return res;
}

let str = isStr(arr);
let result = sumEl(arr);

console.log(result);
