// Напишите функцию, которая принимает строку в маленьком регистре и
// возаращает строку, где каждое слово начинается с большого регистра
// hschool company -> Hschool Company

const str = "hschool company".split(" ");

function doUpperCase(str_) {
  let strUp = "";

  for (let i = 0; i < str_.length; i++) {
    strUp += str_[i][0].toUpperCase() + str_[i].slice(1) + " ";
  }
  return strUp;
}

let result = doUpperCase(str);

console.log(result);
