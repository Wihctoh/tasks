// Создайте массив чисел и найдите сумму элементов, находящихся на нечетных
// позициях (индексах) массива.

const arrNum: number[] = [1, 2, 3, 4];

const filterNumInd: number = arrNum.reduce((sum, el, index) => {
  return index % 2 !== 0 ? sum + el : sum + 0;
}, 0);

console.log(filterNumInd);
