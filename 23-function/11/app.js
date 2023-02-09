// На входе число. Необходимо создать функцию, возвращающую факториал числа
// 4! = 1 * 2 * 3 * 4

const num = 4;

function fact(num_) {
  const bool = isValid(num_);
  let res = 1;

  if (bool === true) {
    for (let i = 1; i <= num_; i++) {
      res *= i;
    }
    return res;
  } else return "error";
}

function isValid(num_) {
  if (typeof num_ == 'Number') {
    return true;
  } else return false;
}

let result = fact(num);

console.log(result);
