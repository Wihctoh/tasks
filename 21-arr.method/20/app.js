// На входе n – количество элементов массива. Далее производится заполнение
// массива с клавиатуры. Оставьте в нем только положительные числа. Filter

const elem = 5;
let arr = [];

for (let i = 0; i < elem; i++) {
  let pr = +prompt("введите элемент");
  if (!isNaN(pr)) {
    arr.push(pr);
  }
}

let result = arr.filter(function (el) {
  if (el > 0) {
    return true;
  }
});

console.log(result);
