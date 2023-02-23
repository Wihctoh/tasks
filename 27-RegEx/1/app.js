// На вход подается строка в виде числа. Необходимо написать регулярное
// выражение. Если строка состоит только из чисел, то вывести булевое true, в
// противном случае бросить исключение и обработать

const str = "+12321321424";

function isValid(str_) {
  try {
    if (!/^(\-|\+)[0-9]+$/gm.test(str_)) throw new Error("это не число!");
    return true;
  } catch (error) {
    return error.message;
  }
}

let result = isValid(str);

console.log(result);
