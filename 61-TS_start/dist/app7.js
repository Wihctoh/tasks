// Напишите программу, которая находит факториал заданного числа num и
// выводит результат в консоль.
var count1 = 1;
var youNum = +prompt();
for (var i_1 = 1; i_1 <= youNum; i_1++) {
    count1 *= i_1;
}
console.log(count1);
