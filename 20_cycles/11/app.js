// У вас есть массив из строк, чисел и иных примитивов. Необходимо создать новый
// массив, заполненный только числами первоначального массива

const arr = ["1", "b", 2, 3, true, 6, false];
let res = [];

for (let i = 0; i < arr.length; i++) {
  if (arr[i] === Number(arr[i])) {
    res.push(arr[i]);
  }
}
console.log(res);
