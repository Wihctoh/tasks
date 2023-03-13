// На вход программе подается число в двоичной системе счисления. Необходимо
// преобразовать его в десятичную систему счисления

let num = "10101010010";

function decodeNum(num) {
  try {
    let res = "";

    for (let i = 0; i < num.length; i++) {
      res += num[i] * 2 ** (num.length - i - 1) + " ";
    }

    let sum = res.split(" ").reduce(function (sum, el) {
      return sum + +el;
    }, 0);

    return sum;
  } catch (error) {
    return error.message;
  }
}

let result = decodeNum(num);
console.log(result);
