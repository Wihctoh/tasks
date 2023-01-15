// Дана строка 'aaa bbb ccc'. Вырежите из нее слово 'bbb'

const str = "aaa bbb ccc";

if (isNaN(str)) {
  let b = str.indexOf("b");
  let c = str.lastIndexOf("b");
  console.log(str.slice(b, c + 1));
} else {
  console.log("error");
}
