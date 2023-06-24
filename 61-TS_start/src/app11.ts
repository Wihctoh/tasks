// Напишите программу, которая определяет, является ли заданная строка
// анаграммой (состоит из тех же символов, но в другом порядке) другой строки

const str123: string = "anna";
const str321: string = "aann";

const newStr123: any = str123.split("").sort().join("");
const newStr321: any = str321.split("").sort().join("");

console.log(newStr123 === newStr321 ? true : false);
