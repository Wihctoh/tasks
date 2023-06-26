// Создайте массив чисел и найдите сумму всех нечетных элементов в массиве.
const numArr = [1, 2, 3, 4, 5, 6];
const filteredArr = numArr.filter((el) => el % 2 !== 0 ? true : false);
const reduceArr = filteredArr.reduce((sum, el) => el + sum, 0);
console.log(reduceArr);
