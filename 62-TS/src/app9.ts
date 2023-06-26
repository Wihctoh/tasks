// Создайте массив из чисел и строк и удалите из него все повторяющиеся
// элементы, оставив только уникальные значения.

const arraye: (string | number)[] = ["qwe", 123, "qwe", 123];
const ar: (string | number)[] = [];

for (let i = 0; i < arraye.length; i++) {
  if (!ar.includes(arraye[i])) ar.push(arraye[i]);
}

console.log(ar);
