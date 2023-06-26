// На входе динамичный массив чисел. Используя reduce выведите сумму чисел
// массива

const numerArr: number[] = [];

for (let i = 0; i < 5; i++) {
  const pr: number = +prompt();

  if (!isNaN(pr)) numerArr.push(pr);
}

const reducer: number = numerArr.reduce((sum, el) => el + sum, 0);

console.log(reducer);
