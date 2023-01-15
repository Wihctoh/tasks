// На вход программе подается переменная date, в котрой лежит дата в формате
// 'xxxx-xx-xx'. Преобразуйте эту дату в формат 'xx/xx/xxxx’. (reverse)

const date = prompt("");

if (isNaN(date)) {
  console.log(date.split("-").reverse().join("/"));
} else {
  console.log("error");
}

console.log(isNaN(date) ? date.split("-").reverse().join("/") : "error");
