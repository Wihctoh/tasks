// На входе строка в виде пароля. Необходимо написать функцию на проверку, что
// пароль является надежным (содержит хотя бы 1 букву в большом регистре, числа,
// буквы, символ, длина не менее 8 символов)

const pass = "Qwertdcdcy1@";

function doPass(pass_) {
  let specSymb;
  let passLength;
  let upperCase;
  let includeNumber;
  let res;

  if (pass_.includes("@") || pass_.includes("$") || pass_.includes("#")) {
    specSymb = true;
  } else specSymb = false;

  if (pass_.length >= 8) {
    passLength = true;
  } else passLength = false;

  for (let i = 0; i < pass_.length; i++) {
    if (pass_[i] === pass_[i].toUpperCase()) {
      upperCase = true;
      break;
    } else upperCase = false;
  }

  for (let i = 0; i < pass_.length; i++) {
    if (!isNaN(pass_[i])) {
      includeNumber = true;
      break;
    } else includeNumber = false;
  }

  if (
    passLength == true &&
    upperCase == true &&
    includeNumber == true &&
    specSymb == true
  ) {
    return (res = "надежный пароль!");
  } else return (res = "ненадежный пароль!");
}

let result = doPass(pass);
console.log(result);
