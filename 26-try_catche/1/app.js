// На входе значение. Необходимо его обработать. Если это число и оно не является
// четным, бросить исключение

const num = 1;

function isNumber(num_) {
  try {
    if (typeof num_ != "number") throw new Error("это не число!");
    if (num_ % 2 != 0) throw new Error("не является четным!");

    return true;
  } catch (error) {
    return error.message;
  }
}

let result = isNumber(num);
console.log(result);
