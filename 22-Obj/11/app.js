// На входе пустой объект. С клавиатуры вводятся 2 числа. Необходимо добавить в
// объект ключ “avg” со значением среднего арифметического введенных с чисел

const obj = {};

let avrNum =
  (+prompt("введите первое число") + +prompt("введите второе число")) / 2;

obj["avg"] = avrNum;

console.log(obj);
