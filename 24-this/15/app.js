// *Вычислить факториал числа используя рекурсию

function doFactorial(x) {
  if (x == 1) return 1;
  return x * doFactorial(x - 1);
}

console.log(doFactorial(5));
