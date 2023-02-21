// Дана строка массива чисел. Необходимо спарсить строку. Если же после того как
// вы спарсили данные у вас не массив – бросить исключение. Добавить проверку
// на числа. Далее вывести только те числа, которые кратны 3

const arr = JSON.parse(`[1,2,3,6,"a"]`);

function isValid(arr_) {
  try {
    if (!Array.isArray(arr_)) throw new Error("это не массив");

    for (let i = 0; i < arr_.length; i++) {
      if (isNaN(arr_[i])) throw new Error("это не число");
    }

    const res = arr_.filter(function (el) {
      if (el % 3 == 0) {
        return true;
      } else false;
    });

    return res;
  } catch (error) {
    return error.message;
  }
}

let result = isValid(arr);
console.log(result);
