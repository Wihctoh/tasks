// На входе n – количество элементов массива. Далее производится заполнение
// массива arr с клавиатуры. Также в памяти есть статичная переменная со
// значением javascript. Необходимо создать новый массив из отфильтрованных
// значений, где строка массива arr включают значение переменной javascript.
// Проверка на ввод только текстовых значений на заполнение массива. forEach

const num = 3;
let arr = [];
let js = "javascript";

for (let i = 0; i < num; i++) {
  let pr = prompt("введите элемент");
  if (isNaN(pr)) {
    arr.push(pr);
  }
}

// let arr2 = [];

// arr.forEach(function (el) {
//   if (el.includes(js)) {
//     arr2.push(el);
//   }
// });

// console.log(arr2);

let result = arr.filter(function (el) {
  if (el.includes(js)) {
    return true;
  }
});

console.log(result);
