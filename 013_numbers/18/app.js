// . Пользователь вводит с клавиатуры число. Найдите корень введенного числа (если
// 	же результат – число с плавающей точкой, то округлить до целых)

const a = +prompt("введите число");
const b = Math.sqrt(a);

console.log(Math.round(b));