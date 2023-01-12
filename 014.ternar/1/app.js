// Найти максимальное число из 2 введенных (2 способа)

const a = +prompt("введите число");
const b = +prompt("введите число");

if (a > b) {
  console.log(a);
} else {
  console.log(b);
}

a > b ? console.log(a) : console.log(b);

console.log(Math.max(a, b));
