// На входе массив. Реализуйте 2 функции. Первая для проверки, что в массиве
// только числа. Вторая для поиска максимального значения в массиве. Если
// результат функции проверки – true, то вызывать новую функцию, возвращающую
// максимальное значение массива

const arr = [-1, 2, 4, 5, -2312321, 12];

function isValid(arr_) {
  const bool = arr_.every(function (el) {
    if (!isNaN(el)) {
      return true;
    } else return false;
  });
  return bool;
}

function searchMax(arr_) {
  const bool = isValid(arr_);
  if (isValid == true) {
    const max = Math.max(...arr_);

    return max;
  } else return "error";
  return bool;
}

let result = searchMax(arr);
console.log(result);
