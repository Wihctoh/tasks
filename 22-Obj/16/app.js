// На входе объект из 5 свойств. Значения вводим с клавиатуры. Необходимо
// проитерировать значения объекта и сформировать на основе этих чисел массив

const obj = {
  a: "",
  b: "",
  c: "",
  d: "",
  e: "",
};
let res = [];

for (let key in obj) {
  obj[key] = prompt("введите значениея");
  res.push(obj[key]);
}

console.log(res);
