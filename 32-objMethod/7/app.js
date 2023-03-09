// На вход подается число. Необходимо каждое значение возвести в степень
// индекса и вычислить сумму.
// 12345 = 1
// 0+2
// 1+3
// 2+4
// 3+5
// 4

const str = "12345";

function main(str_) {
  let num = 0;
  for (let i = 0; i < str_.length; i++) {
    num += str_[i] ** i;
  }
  return num;
}

let res = main(str);

console.log(res);
