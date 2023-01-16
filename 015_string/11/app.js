// Дана строка из 3 слов разделенных пробелом:
// • Найдите количество символов в этой строке.
// • Вырежите из нее 2 и 3 слова.
// • Найдите индекс 2 подстроки

const str = prompt("введите строку").toLowerCase();

if (isNaN(str)) {
  let sliceString = str.split(" ").slice(1);
  console.log(str.length, sliceString, sliceString[1]);
} else console.log("error");
