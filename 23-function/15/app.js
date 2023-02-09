// На входе n – количество элементов массива. Далее производится заполнение
// массива с клавиатуры. Реализуйте 3 функции. Первая для формирования массива.
// Вторая для проверки, что в массиве только числа. Третья для получения
// произведения всех элементов массива. Если результат функции проверки – true,
// то вызывать новую функцию, возвращающую произведение всех элементов
// массива

const num = 3;

function isValid(arr_) {
  let isNumber = arr_.every((el) => (typeof el === "number" ? true : false));

  return isNumber;
}

function doArr(num_) {
  let arr = [];

  for (let i = 0; i < num_; i++) {
    let pr = +prompt("введите элемент массива");
    arr.push(pr);
  }

  return arr;
}

function multiply(arr__) {
  let valid = isValid(arr__);
  if (valid === true) {
    let res = arr__.reduce((sum, el) => sum * el, 1);

    return res;
  } else return "error";
}

let arr = doArr(num);
let result = multiply(arr);

console.log(result);
