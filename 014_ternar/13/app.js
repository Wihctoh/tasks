// Пользователь вводит четырехзначное число. Напишите скрипт, который будет
// выявлять является ли каждое составляющее числа четным либо нечетным.
// Добавить проверку на ввод только чисел
// 1234 -> 1 – неч 2 – чет 3 – неч 4 – чет

let a = prompt("введите число");
let b = a.slice(0, 1);
let c = a.slice(1, 2);
let d = a.slice(2, 3);
let e = a.slice(3, 4);

if (isNaN(a)) {
  console.log("введите число");
} else {
  a = +a;
  b = +b;
  c = +c;
  d = +d;
  e = +e;

  if (b % 2 === 0) {
    console.log(`${b}  четное`);
  } else {
    console.log(`${b}  нечетное`);
  }

  if (c % 2 === 0) {
    console.log(`${c}  четное`);
  } else {
    console.log(`${c}  нечетное`);
  }

  if (d % 2 === 0) {
    console.log(`${d}  четное`);
  } else {
    console.log(`${d}  нечетное`);
  }

  if (e % 2 === 0) {
    console.log(`${e}  четное`);
  } else {
    console.log(`${e}  нечетное`);
  }
}
