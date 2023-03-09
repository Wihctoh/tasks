// На входе объект и число n, символизирующее количество пар ключ-значение.
// Ключи - автоинкремент (генерируется автоматически от 1 до n). Значение каждого
// ключа – рандомное число от 1 до 100. Вывести каждое значение объекта с
// помощью values

const num = 10;
const obj = {};

function doKeys(obj_, num_) {
  for (let i = 0; i < num_; i++) {
    obj_[i] = Math.round(Math.random() * 100);
  }
  return obj_;
}
let key = doKeys(obj, num);

function showValues(obj_) {
  try {
    let values = Object.values(obj_);

    return values;
  } catch (error) {
    return error.message;
  }
}

let result = showValues(key);

console.log(result);
