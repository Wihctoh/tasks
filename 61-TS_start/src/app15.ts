// Создайте переменную sentence и присвойте ей строковое значение
// предложения. Напишите программу, которая преобразует первую букву каждого
// слова в предложении в верхний регистр. Например, для предложения "hello
// world" результатом должна быть строка "Hello World".

const sentence: string = "hello world";
const res66: any = sentence.trim().split(" ");

let result = "";

for (let i = 0; i < res66.length; i++) {
  result += res66[i][0].toUpperCase() + res66[i].slice(1) + " ";
}

console.log(result);
