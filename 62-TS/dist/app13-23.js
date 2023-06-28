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
// const string999: string = "qqqqwwweeer";
// const obj11 = {};
// for (let i = 0; i < string999.length; i++) {
//   if (obj11[string999[i]]) {
//     obj11[string999[i]] += 1;
//   } else obj11[string999[i]] = 1;
// }
// const result1111 = Object.entries(obj11);
//15. На входе динамичный массив строк. Используя forEach создайте новый массив из
// элементов, каждое значение которого имеет вид !name
// [“hschool”, “company”] -> [“!hschool”, “!company”]
// const str33: string[] = ["hschool", "company"];
// let resArr: string[] = [];
// str33.forEach((el) => resArr.push("!" + el));
// console.log(resArr);
// 16. Создайте массив чисел и определите, является ли он строго возрастающей
// последовательностью.
const numArray = [3, 4, 9, 10, 60, 70];
const count = [numArray[0]];
for (let i = 1; i < numArray.length; i++) {
    if (numArray[i] > count[count.length - 1]) {
        count.push(numArray[i]);
    }
    else {
        console.log(false);
        break;
    }
}
if (numArray.length === count.length)
    console.log(true);
