// На входе n – количество элементов массива. Далее производится заполнение
// массива с клавиатуры. Реализуйте 3 функции. Первая для формирования массива.
// Вторая для проверки, что в массиве только числа. Третья для формирования
// массива из всех четных чисел, возведенных в квадрат. Если результат функции
// проверки – true, то вызывать новую функцию, возвращающую массив из всех
// четных чисел, возведенных в квадрат

function doArr() {
  let result = [];
  let num = 3;

  for (let i = 0; i < num; i++) {
    let pr = prompt("");
    result.push(pr);
  }

  return result;
}

let arr = doArr();
console.log(arr);

function isValid(arr) {
  let arr1 = result.every(function (el) {
    if (!isNaN(el)) {
      return true;
    } else return false;
  });

  return arr1;
}
