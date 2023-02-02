// На входе n – количество элементов массива. Далее производится заполнение
// массива с клавиатуры. Необходимо создать новый массив из отфильтрованных
// значений, где строка начинается на [a, h]. Проверка на ввод только текстовых
// значений на заполнение массива. filter
// [“ann”, “school”, “hschool”, “borabora”] -> [“ann”, “hschool”]

const n = 5;
let arr = [];

for (let i = 0; i < n; i++) {
  let pr = prompt("введите элемент");
  if (isNaN(pr)) {
    arr.push(pr);
  }
}

// let arr1 = arr.filter(function (el) {
//   return el[0] == "a" || el[0] == "h" ? true : false;
// });

// console.log(arr1);

// let arr2 = [];

// arr.forEach(function (el) {
//   if (el[0] == "a" || el[0] == "h") {
//     arr2.push(el);
//   }
// });

// console.log(arr2);

let i = 0;
let result = [];

while (i < n) {
  if (arr[i][0] == "a" || arr[i][0] == "h") {
    result.push(arr[i]);
  }
  i++;
}

console.log(result);
