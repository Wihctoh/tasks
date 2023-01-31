// Пользователь вводит число, явдяющееся количеством элементов будущего
// массива. Напишите код заполнения массива методом prompt.

const num = 5;
let resArr = [];

for (let i = 0; i < num; i++) {
  let a = +prompt("введите число");
  resArr.push(a);
}

console.log(resArr);
