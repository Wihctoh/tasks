// На входе массив. Реализуйте 2 функции. Первая для проверки, что в массиве
// только числа. Вторая для получения массива с удвоенными значенями каждого
// элемента. Если результат функции проверки – true, то вызывать новую функцию,
// возвращающую массив с удвоенными элементами

const arr = [1, 2, 3];

function isNum(arr_) {
  let res = arr_.every(function (el) {
    if (!isNaN(el)) {
      return true;
    } else false;
  });

  return res;
}

function doubleEl(arrEl) {
  let result = arrEl.map(function (el) {
    return el * 2;
  });
  return result;
}

let num = isNum(arr);
let result = doubleEl(arr);

if (num == true) {
  console.log(result);
}
