// На входе массив. Необходимо создать функцию проверки на то что в массиве
// только числа. Функция возвращает true, если в массиве только числа и false в
// противном случае

const arr = [1, 2, 3, 4, "a", "b"];

function isTrue(arr_) {
  let countWorld = 0;

  for (let i = 0; i < arr_.length; i++) {
    if (!isNaN(arr_[i])) {
      continue;
    } else {
      countWorld++;
    }
  }

  if (countWorld > 0) {
    return false;
  } else return true;
}

let result = isTrue(arr);

console.log(result);
