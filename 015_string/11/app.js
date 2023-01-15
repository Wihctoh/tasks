// Дана строка из 3 слов разделенных пробелом:
// • Найдите количество символов в этой строке.
// • Вырежите из нее 2 и 3 слова.
// • Найдите индекс 2 подстроки

const str = prompt("введите строку").toLowerCase();

if (isNaN(str)) {
  console.log(str.length, str.split(" ").slice(1));
  console.log();
} else console.log("error");
