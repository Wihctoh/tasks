// Написать функцию, принимающую в параметрах дату в формат “xx/xx/xxxx”.
// Функция должна преобразовать строку в формат “xxxx-xx-xx”.

const date = "xx/xx/xxxx";

function doDate(date_) {
  let res = date_.split("/").reverse("").join("-");

  return res;
}

let result = doDate(date);
console.log(result);
