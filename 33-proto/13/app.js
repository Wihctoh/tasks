// Напишите алгоритм для нахождения факториала числа

let num = 5;

function doFactorial(num) {
  try {
    let res = 1;

    for (let i = 1; i <= num; i++) {
      res *= i;
    }

    return res;
  } catch (error) {
    return error.message;
  }
}

console.log(doFactorial(num));
