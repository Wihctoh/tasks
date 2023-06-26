// На входе 5 значений. Все эти значения пользователь вводит с клавиатуры и
// заполняет массив. Необходимо создать массив только из чисел.

const nume: number = 5;
let arr: string[] = [];

for (let i = 1; i <= nume; i++) {
  let pr: string = prompt();

  arr.push(pr);
}

console.log(arr);
