// Создайте массив чисел и найдите сумму всех нечетных элементов в массиве.

const numArr: number[] = [1, 2, 3, 4, 5, 6];

const filteredArr: number[] = numArr.filter((el) =>
  el % 2 !== 0 ? true : false
);

const reduceArr: number = filteredArr.reduce((sum, el) => el + sum, 0);

console.log(reduceArr);
