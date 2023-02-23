// Реализуйте функцию, которая принимает число и возвращает возвенную в
// квадрат каждую цифру числа соединяя их. Добавить проверки
// 9119 -> 811181

let num = 9119;

function sqrtNum(num_) {
  try {
    if (isNaN(num_)) throw new Error("is not a number!");

    num_ = "" + num_;
    let sqrtNumber = [];

    for (let i = 0; i < num_.length; i++) {
      sqrtNumber.push(num_[i] ** 2);
    }
    return +sqrtNumber.join("");
  } catch (error) {
    return error.message;
  }
}

let result = sqrtNum(num);

console.log(result);
