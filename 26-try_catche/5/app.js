// На вход подается число n – количество элементов массива. Необходимо
// заполнить массив случайными элементами. Если значение массива находится в
// диапазоне 10<n< 100, то занести в новый массив. Добавить проверки и обработать
// их. Обратите внимание, тут как минимум 3 функции. Первая: формирование
// массива. Вторая: валидация. Третья: основная логика задачи

const n = 5;

function toArray(n_) {
  let arr = [];

  for (let i = 0; i < n_; i++) {
    arr.push(Math.round(Math.random() * 100));
  }
  return arr;
}

function isValid(arr_) {
  for (let i = 0; i < arr_.length; i++) {
    if (isNaN(arr_[i])) throw new Error("это не число");
  }
}

function main(array_) {
  try {
    isValid(array_);

    let resArr = [];

    for (let i = 0; i < array_.length; i++) {
      if (array_[i] < 100 && array_[i] > 10) {
        resArr.push(array_[i]);
      }
    }
    return resArr;
  } catch (error) {
    return error.message;
  }
}

let array = toArray(n);
let filterArr = main(array);

console.log(filterArr);
