// Найдите квадратный корень числа. Результат округлите до целых, десятых, сотых.

const number = Math.sqrt(49.9528);

console.log(Math.round(number));
console.log(+(Math.ceil(number * 10) / 10).toFixed(1));
console.log(Math.ceil(number * 100) / 100);
