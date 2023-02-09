// На входе строка. Необходимо создать функцию, возвращающую true, если это
// слово палиндром и false в противном случае

const str = "anna";

function poli(str_) {
  const strRev = str_.split("").reverse().join("");
  if (str_ == strRev) {
    return true;
  } else return false;
}

let res = poli(str);

console.log(res);
