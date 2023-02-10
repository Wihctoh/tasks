// 11. На входе число. Необходимо создать функцию, возвращающую факториал числа
// 4! = 1 * 2 * 3 * 4

const a = 4;
function isValid(number_) {
  return typeof number_ == "number" ? true : false;
}

function fact(number_) {
  const bool = isValid(number_);

  if (bool == true) {
    let count = 1;

    for (let i = 1; i <= number_; i++) {
      count *= i;
    }
    return count;
  } else "error";
}
const res = fact(a);

console.log(res);
