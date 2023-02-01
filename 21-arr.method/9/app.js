// На входе n – количество элементов массива. Далее производится заполнение
// массива с клавиатуры. Выведите сумму всех элементов массива. Проверки на
// ввод только чисел. Использовать forEach, reduce

const num = 5;
const arr = [];
let res1 = 0;

for (let i = 0; i < 5; i++) {
  let pr = +prompt("введите число");

  if (!isNaN(pr)) {
    arr.push(pr);
  }
}


arr.forEach(function (el) {
  res1 += el;
});

console.log(res1);

let res2 = arr.reduce(function (sum, el) {
  return sum + el;
}, 0);

console.log(res2);
