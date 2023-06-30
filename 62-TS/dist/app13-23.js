// 13. На входе динамичный массив чисел. Используя map выведите массив строк
// четности и нечетности, в соответствии со значением числа:
// [1, 2, 3, 4, 5, 6] -> [“нечет”, “чет”, “нечет”, “чет”, “нечет”, “чет”]
const arrObj = [
    { name: "Kate", salary: 100 },
    { name: "Jack", salary: 200 },
    { name: "Vito", salary: 300 },
];
const resuledSal = arrObj.reduce((sum, el) => el.salary + sum, 0);
console.log(`average price is: ${resuledSal / arrObj.length}$`);
