// На входе динамичный массив чисел. Используя reduce выведите сумму чисел
// массива
const numerArr = [];
for (let i = 0; i < 5; i++) {
    const pr = +prompt();
    if (!isNaN(pr))
        numerArr.push(pr);
}
const reducer = numerArr.reduce((sum, el) => el + sum, 0);
console.log(reducer);
