// Напишите программу, которая принимает строку и возвращает новую строку, в
// которой каждое слово заменено на последнюю букву этого слова, а все остальные
// символы остаются без изменений.
// "Hello World" -> "o d“
const str77 = "Hello World";
const preRes = str77.split(" ");
let res88 = "";
for (let i = 0; i < preRes.length; i++) {
    res88 += preRes[i].slice(preRes[i].length - 1) + " ";
}
console.log(res88);
