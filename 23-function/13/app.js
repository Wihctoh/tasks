// На входе строка. Необходимо создать функцию, возвращающую true, если это
// слово анаграмма и false в противном случае

const str = "сукно".split("").sort();
const str2 = "конус".split("").sort();

function isAnnagr(str_1, str_2) {
  if (str_1.join("") == str_2.join("")) {
    return true;
  } else return false;
}

const res = isAnnagr(str, str2);

console.log(res);
