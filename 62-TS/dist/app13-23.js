// 13. На входе динамичный массив чисел. Используя map выведите массив строк
// четности и нечетности, в соответствии со значением числа:
// [1, 2, 3, 4, 5, 6] -> [“нечет”, “чет”, “нечет”, “чет”, “нечет”, “чет”]
// const dynamicArr: number[] = [1, 2, 3, 4, 5, 6];
// const mapingArr: string[] = dynamicArr.map((el) =>
//   el % 2 === 0 ? "чет" : "нечет"
// );
// console.log(mapingArr);
//14. Напишите программу, которая находит и выводит наиболее часто встречающийся
// символ в заданной строке.
const string999 = "qqqqwwweeer";
const obj11 = {};
for (let i = 0; i < string999.length; i++) {
    if (obj11[string999[i]]) {
        obj11[string999[i]] += 1;
    }
    else
        obj11[string999[i]] = 1;
}
const result1111 = Object.entries(obj11);
