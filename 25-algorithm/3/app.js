// Вычислите сумму массива целых чисел статичного массива используя рекурсию

const arr = [1.2, 2, 3, 4, 5];

function isValide(arr_) {
  let validArr = arr_.every(function (el) {
    if (el == Math.round(el)) {
      return true;
    } else return false;
  });
  return validArr;
}

function summEl(arr_) {
  if (resArr == true) {
    if (arr_.length == 1) return arr_[0];
    return arr_[0] + summEl(arr_.slice(1));
  } else return "введите только целые числа!";
}

let resArr = isValide(arr);
let result = summEl(arr);

console.log(result);
