// Напишите функцию, которая принимает статичный массив строк. Необходимо
// отфильтровать значения и оставить только те, где длина строк до 2 символов.
// [“by”, “belarus”, “de”, “ru”, “germany”] -> [“by”, “de”, “ru”]

const arr = ["by", "belarus", "de", "ru", "germany"];

function filter(arr_) {
  let res = arr_.filter(function (el) {
    if (el.length <= 2) {
      return true;
    }
  });
  return res;
}

let result = filter(arr);

console.log(result);
