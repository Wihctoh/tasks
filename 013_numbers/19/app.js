// Даны три числа a, b, c. Напишите программу, которая находит корни квадратного
// уравнения
// ax2 + bx + c = 0
// Если уравнение имеет два корня, то следует вывести их в порядке возрастания.

const a = +prompt("введите число a");
const b = +prompt("введите число b");
const c = +prompt("введите число c");
const discr = b ** 2 - 4 * a * c;
const x = -((b / 2) * a);
const x1 = +((-b + Math.sqrt(discr)) / (2 * a)).toFixed(3);
const x2 = +((-b - Math.sqrt(discr)) / (2 * a)).toFixed(3);

if (discr > 0) {
  if (x1 > x2) {
    console.log(x2, x1);
  } else {
    console.log(x1, x2);
  }
} else if (discr < 0) {
  console.log("действительных корней нет");
} else if (discr == 0) {
  console.log(x);
} else {
  console.log("неверное значение!");
}
