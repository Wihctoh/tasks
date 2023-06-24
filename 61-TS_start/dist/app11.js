// Напишите программу, которая определяет, является ли заданная строка
// анаграммой (состоит из тех же символов, но в другом порядке) другой строки
const str123 = "anna";
const str321 = "aann";
const newStr123 = str123.split("").sort().join("");
const newStr321 = str321.split("").sort().join("");
console.log(newStr123 === newStr321 ? true : false);
