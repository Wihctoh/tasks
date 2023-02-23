// На вход подается строка в виде url. Необходимо написать регулярное выражение
// для данной строки. Если же строка подходит под регулярное выражение, то
// вывести булевое true, в противном случае бросить исключение и обработать

const str = "https://hanna.com";

function isValid(str_) {
  try {
    if (!/^(https\:\/\/|http\:\/\/)[a-zA-Z0-9\.]+[a-z]{1,5}$/gm.test(str_))
      throw new Error("не подходит");
    return true;
  } catch (error) {
    return error.message;
  }
}

let result = isValid(str);

console.log(result);
