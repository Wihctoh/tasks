//4 Создайте динамический массив строк. Используя Some выведите true в случае
// если хотя бы 1 элемент массива имеет длину > 5 символов.
const arrtask4 = [];
for (let i = 0; i < 5; i++) {
    const pr = prompt();
    arrtask4.push(pr);
}
const someRes = arrtask4.some((el) => el.length > 5);
console.log(someRes);
