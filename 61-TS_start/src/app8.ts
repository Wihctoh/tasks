// Создайте переменную str и присвойте ей строковое значение. Используя цикл for,
// выведите каждый второй символ строки.

const str: string = "qwerty";
let res: string = "";

for (let i = 0; i < str.length; i++) {
  if (i % 2 !== 0) res += str[i];
}

console.log(res);
