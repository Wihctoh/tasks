// Создайте переменную str и присвойте ей строковое значение. Используя цикл for,
// выведите каждый второй символ строки.
var str = "qwerty";
var res = "";
for (var i_1 = 0; i_1 < str.length; i_1++) {
    if (i_1 % 2 !== 0)
        res += str[i_1];
}
console.log(res);
