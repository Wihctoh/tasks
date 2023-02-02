// На входе n – количество элементов массива. Далее производится заполнение
// массива с клавиатуры. Значения могут быть строкового либо числового типа
// данных. Необходимо из этих элементов составить 2 массива: со строками и второй
// массив, соответственно, с числами. forEach

const n = 6;
let arr = [];
let arrN = [];
let arrS = [];
for (let i = 0; i < n; i++) {
  let a = prompt();
  arr.push(a);
}

arr.forEach(function (el) {
  if (isNaN(el)) {
    arrS.push(el);
  } else arrN.push(el);
});

console.log(arrN, arrS);
