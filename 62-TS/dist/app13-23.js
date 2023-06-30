// 13. На входе динамичный массив чисел. Используя map выведите массив строк
// четности и нечетности, в соответствии со значением числа:
// [1, 2, 3, 4, 5, 6] -> [“нечет”, “чет”, “нечет”, “чет”, “нечет”, “чет”]
const arrObj = [
    { name: "milk", salary: 100, count: 10 },
    { name: "bread", salary: 200, count: 15 },
    { name: "water", salary: 300, count: 20 },
];
const reduceRes = arrObj.reduce((sum, el) => el.salary * el.count + sum, 0);
console.log(reduceRes);
