// Напишите программу, которая принимает строку и возвращает новую строку, в
// которой все символы уникальны (не повторяются). Например, для строки "hello"
// результатом должна быть строка "helo".

const str24: string = "hheelloohhh!!";
let res16: string = "";

for (let i = 0; i < str24.length; i++) {
  if (!res16.endsWith(str24[i])) res16 += str24[i];
}

console.log(res16);
