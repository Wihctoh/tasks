// Найдите квадратный корень числа. Результат округлите до целых, десятых, сотых.

const number = 49.2528;

console.log(Math.sqrt(Math.floor(number)));
console.log(Math.sqrt(Math.floor(number)).toFixed(1));
console.log(Math.sqrt(Math.floor(number)).toFixed(2));
console.log(Math.sqrt(Math.floor(number)).toFixed(3));

console.log(Math.fround(number));