// На входе пустой объект, массив, n – количество элементов массива. Далее
// производится заполнение массива с клавиатуры. Добавить в объект ключ “sum”,
// значение – сумма элементов массива(reduce). Добавить проверки на ввод чисел

const obj = {};
const arr = [];
const num = 3;

for (let i = 0; i < num; i++) {
  let pr = prompt("");
  if (!isNaN(pr)) {
    arr.push(+pr);
  }
}

let res = arr.reduce(function (sum, el) {
  return sum + el;
}, 0);

obj.sum = res;
console.log(obj);
