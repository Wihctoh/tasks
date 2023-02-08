// На входе массив. Реализуйте 2 функции. Первая для проверки, что в массиве
// только числа. Вторая для получения только четных элементов массива. Если
// результат функции проверки – true, то вызывать новую функцию, возвращающую
// массив с четными элементами массива
const arr = [1, 2, 3, 4, 5, 6];

function isNum(arr_) {
  let res = arr_.every(function (el) {
    if (!isNaN(el)) {
      return true;
    } else false;
  });

  return res;
}

function even(arr__) {
  let resArr = [];
  let res = arr__.map(function (el) {
    if (el % 2 === 0) {
      return resArr.push(el);
    }
  });
  return resArr;
}

let evenArr = even(arr);

if (isNum(arr) === true) {
  console.log(evenArr);
}
