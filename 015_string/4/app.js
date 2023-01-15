// ‘HTML JavaScript PHP’ преобразовать в "HTML-JAVASCRIPT-PHP"

const a = "HTML JavaScript PHP".toUpperCase().split(" ").join("-");

console.log(a);
console.log(a.replaceAll(" ", "-"));
