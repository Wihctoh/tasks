// Напишите программу, которая принимает строку и возвращает новую строку, в
// которой каждое слово заменено на последнюю букву этого слова, а все остальные
// символы остаются без изменений.
// "Hello World" -> "o d“

const str77: string = "Hello World";
const preRes: any = str77.split(" ");
let res88: string = "";

for (let i = 0; i < preRes.length; i++) {
  res88 += preRes[i].slice(preRes[i].length - 1) + " ";
}

console.log(res88);
