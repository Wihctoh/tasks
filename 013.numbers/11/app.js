//  Напишите программу, в которой вычисляется сумма, разность и произведение
// двух целых чисел, введенных с клавиатуры.

const a = +prompt("введите число");
const b = +prompt("введите число");

console.log(Math.trunc(a + b));
console.log(Math.trunc(a - b));
console.log(Math.trunc(a * b));
