// Напишите программу, которая находит и выводит наиболее длинное слово в
// заданной строке.
var str14 = "Hifffff Hello Hey".split(" ");
var term = "";
for (var i_1 = 0; i_1 < str14.length; i_1++) {
    if (str14[i_1].length > term.length) {
        term = str14[i_1];
    }
}
console.log(term);
