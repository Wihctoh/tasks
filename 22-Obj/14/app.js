// На входе статичный объект с повторяющимися значениями. Необходимо
// отфильтровать значения объекта и оставить только уникальные значения

const obj1 = {
  0: 7,
  1: 7,
  2: 6,
  3: 5,
  4: 2,
  5: 2,
  6: 1,
};
let obj2 = {};

let arr = [];

for (let key in obj1) {
  arr.push(obj1[key]);
}

arr = arr.sort();
let uniq = [];

for (let i = 0; i < arr.length; i++) {
  if (!uniq.includes(arr[i])) {
    uniq.push(arr[i]);
  }
}

for (let i = 0; i < uniq.length; i++) {
  obj2[i] = uniq[i];
}

console.log(obj2);
