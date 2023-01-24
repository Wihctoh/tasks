// Реализовать строку, в которую 5 раз будет конкатенироваться новое значение
// prompt (где значение число)

let str = 0;

for (let i = 0; i < 5; i++) {
  let value = prompt();
  if (!isNaN(value)) {
    str += value;
  }
}

console.log(str);
