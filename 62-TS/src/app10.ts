// Создайте массив строк и преобразуйте каждую строку в новую строку,
// содержащую только гласные буквы.

const strArrr: string[] = ["qwe", "eee", "ooo"];
const mapArr: string[] = strArrr.map((el) => el.replaceAll(/[^aeiou]+/gm, ""));

console.log(mapArr);
