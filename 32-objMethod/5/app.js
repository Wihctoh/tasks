// На входе объект и число n, символизирующее количество пар ключ-значение.
// Ключи и значения - автоинкремент (генерируется автоматически от 1 до n).
// Проверить есть ли ключ 10 в объекте.

const obj = {};
let num = 12;

function doObj(obj_, num_) {
  for (let i = 0; i < num_; i++) {
    obj_[i] = i;
  }

  return obj_;
}

function doNumber(obj_, num_) {
  try {
    let keys = Object.keys(doObj(obj_, num_));
    if (!keys[9]) throw new Error("no have");
    return true;
  } catch (error) {
    return error.message;
  }
}

let res = doNumber(obj, num);
console.log(res);
