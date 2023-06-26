// Создайте массив чисел и найдите в нем все числа, которые делятся на 3 и не
// делятся на 2.
const arrNum1 = [1, 2, 3, 6, 9];
const filtered = arrNum1.filter((el) => el % 3 === 0 && el % 2 !== 0);
console.log(filtered);
