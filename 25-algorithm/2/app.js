// На входе строка в виде пароля. Необходимо написать функцию на проверку, что
// пароль является надежным (содержит хотя бы 1 букву в большом регистре, числа,
// буквы, символ, длина не менее 8 символов)

const pass = "@qwertY123";

function generatePass(pass_) {
  if (pass.length < 8) return "less then 8 letter";

  let countNum = 0;
  let countLetterUpper = 0;
  let countLetterLower = 0;

  for (let i = 0; i < pass_.length; i++) {
    if (!isNaN(pass_[i])) {
      countNum++;
    } else {
      pass_[i] == pass_[i].toUpperCase()
        ? countLetterUpper++
        : countLetterLower++;
    }
  }

  //   if (pass_.length - (countNum + countLetterLower + countLetterUpper) == 0)
  //     return "enter symbol";

  if (countNum == 0 || countLetterLower == 0 || countLetterUpper == 0)
    return "reenter the password";

  return true;
}

let result = generatePass(pass);

console.log(result);
