// Напишите программу, которая находит факториал заданного числа num и
// выводит результат в консоль.
let count1 = 1;
let youNum = +prompt();
for (let i = 1; i <= youNum; i++) {
    count1 *= i;
}
console.log(count1);
