// Неопытный Junior запушил в GitHub html файл с комментариями. Team Lead не
// оценил использование комментариев в ветке development и попросил их убрать.
// Вырезая куски кода вы поняли, что их чересчур много. Необходимо написать
// регулярное выражение, которое вырежет все комментарии из html разметки
// <!-- -->
let html = "<!-- asdasdsad --> qwerty <!-- 1234 --> 1234 <!-- asdasdsad --> ";

function doCut(html_) {
  try {
    let arr = html_.replaceAll(/\<\!\-\- \w+ \-\-\>/gm, "");

    return arr;
  } catch (error) {
    return error.message;
  }
}

let result = doCut(html);

console.log(result);
