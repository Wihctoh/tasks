// Напишите функцию, которая принимает строку состоящую из нескольких слов.
// Каждое нечетное слово строки функция должна преобразовать в нижний регистр,
// все четные слова, соответственно, в верхний
// happy new year -> happy NEW year

const words = "aa bb cc".split(" ");

function showRes(words_) {
  let res = words_.map(function (el, index) {
    if (index % 2 == 0) {
      return el.toLowerCase();
    } else return el.toUpperCase();
  });

  return res;
}

let a = showRes(words);

console.log(a);
