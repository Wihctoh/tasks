// Напишите программу, которая определяет, является ли заданная строка
// анаграммой (состоит из тех же символов, но в другом порядке) другой строки

const str123: string = "anna";
const str321: string = "aann";

console.log(
  str123.split("").sort().join("") === str321.split("").sort().join("")
    ? true
    : false
);
