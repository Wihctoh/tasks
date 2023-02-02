// На входе n – количество элементов массива. Далее производится заполнение
// массива с клавиатуры. Если все элементы массива – числа, то вывести логическое
// true, в противном случае false. Every, forEach

const num = 3;
const arr = [];

for (let i = 0; i < num; i++) {
  let pr = prompt("введите число");
  arr.push(pr);
}

arr.forEach(function (el) {
  if (!isNaN(el)) {
    console.log(true);
  } else console.log(false);
});

const result = arr.every(function (el) {
  if (!isNaN(el)) {
    return true;
  } else {
    return false;
  }
});

console.log(result);
