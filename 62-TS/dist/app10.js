// Создайте массив строк и преобразуйте каждую строку в новую строку,
// содержащую только гласные буквы.
const strArrr = ["qwe", "eee", "ooo"];
const mapArr = strArrr.map((el) => el.replaceAll(/[^aeiou]+/gm, ""));
console.log(mapArr);
