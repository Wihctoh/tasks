// На входе n – количество элементов массива. Далее производится заполнение
// массива с клавиатуры. Реализуйте 3 функции. Первая для формирования массива.
// Вторая для проверки, что в массиве только числа. Третья для формирования
// массива из всех четных чисел, возведенных в квадрат. Если результат функции
// проверки – true, то вызывать новую функцию, возвращающую массив из всех
// четных чисел, возведенных в квадрат

let num = 3;

//функция формирует массив, принимает в качестве аргумента num
function doArr(num_) {
  let result = [];

  for (let i = 0; i < num_; i++) {
    let pr = +prompt("");
    // let pr = 2;

    result.push(pr);
  }
  return result;
}

// функция проверки на ввод числа. принимает в качестве аргумента результат функции doArr(num);
function isValid(arr_) {
  let arr = [];

  for (let i = 0; i < num; i++) {
    if (!isNaN(arr_[i])) {
      arr.push(arr_[i]);
    } else return "input number!";
  }
  return arr;
}

//функция возведения в степень элементов массива по условию четности.
// Принимает в качестве аргумента validArr;
function doublElArr(validArr_) {
  let arr = [];

  for (let i = 0; i < num; i++) {
    if (validArr_[i] % 2 === 0) {
      arr.push(validArr_[i] ** 2);
    } else return "error";
  }
  return arr;
}

let promptArr = doArr(num);
let validArr = isValid(promptArr);
let result = doublElArr(validArr);

console.log(result);
