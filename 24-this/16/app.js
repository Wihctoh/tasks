// Вычислите сумму массива чисел статичного массива используя рекурсию
let arr = [1, 2, 3, 4, 5];

function doSumm(arr_) {
  if (arr_.length === 1) return arr_[0];
  return arr_[0] + doSumm(arr_.slice(1));
}

console.log(doSumm(arr));
