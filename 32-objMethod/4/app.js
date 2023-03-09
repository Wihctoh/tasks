// На входе объект. Ключи и значения - автоинкремент (генерируется автоматически
// 	от 1 до n). Написать функцию на поиск в объекте только четных ключей.

const obj = {};

function doObj(obj_) {
  for (let i = 0; i < 5; i++) {
    obj_[i] = i;
  }

  return obj_;
}

function doNumber(obj_) {
  try {
    let res = Object.keys(doObj(obj_));
    let resArr = [];

    for (const el of res) {
      if (el % 2 === 0) {
        resArr.push(el);
      }
    }
    return resArr;
  } catch (error) {
    return error.message;
  }
}

let res = doNumber(obj);
console.log(res);
