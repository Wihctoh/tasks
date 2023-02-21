// На входе массив значений. Необходимо его обработать. Если в массиве есть хотя
// бы 1 строка, бросить исключение.

const arr = [1, 2, 3, 4, "a"];

function isValid(arr_) {
  try {
    let res = arr_.every(function (el) {
      if (isNaN(el)) {
        return true;
      } else return false;
    });
    if (res == false) throw new Error("это ошибка");
    return res;
  } catch (error) {
    return error.message;
  }
}

let result = isValid(arr);

console.log(result);
