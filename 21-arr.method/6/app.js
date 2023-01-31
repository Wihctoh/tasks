// На входе n – количество элементов массива. Далее производится заполнение
// массива с клавиатуры. Необходимо вывести true, если хотя бы 1 элемент массива –
// число. Some

const n = 5;
let arr = [];

for (let i = 0; i < n; i++) {
  let pr = prompt("");
  arr.push(pr);
}
const res = arr.some(function (el) {
  if (!isNaN(el)) {
    return true;
  } else false;
});

console.log(res);
