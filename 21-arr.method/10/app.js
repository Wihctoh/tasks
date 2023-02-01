// На входе n – количество элементов массива. Далее производится заполнение
// массива с клавиатуры. Выведите массив строк из четност и нечетности, в
// соответствии с тестом ниже:
// [1, 2, 3, 4, 5, 6] -> [“нечет”, “чет”, “нечет”, “чет”, “нечет”, “чет”]
// [1, 24, 5] -> [“нечет”, “чет”, “нечет”]
// Использовать map

const num = 5;
const arr = [];

for (let i = 0; i < 5; i++) {
  let pr = +prompt("введите число");

  if (!isNaN(pr)) {
    arr.push(pr);
  }
}

let result = arr.map(function (el) {
  if (el % 2 === 0) {
    return "чет";
  } else return "нечет";
});

console.log(result);
