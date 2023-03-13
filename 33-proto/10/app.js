// Разработчик запушил в главную ветку GitHub js файл с многострочными
// комментариями (/* */). Предстоящее демо гарантирует демонстрацию экрана с
// кодом проделанной работы за спринт. Программисту необходимо вырезать все
// комментарии в коде новым коммитом. Задача: вырезать куски кода комментариев
// используя регулярные выражения воизбежание публичного стыда.

let code = "/* asdasd */ qwe zxc /* sad */";

function cutComments(code) {
  try {
    let res = "".trim();

    if (/\/\* \w+ \*\//gm.test(code)) {
      res += code.replaceAll(/\/\* \w+ \*\//gm, "");
    } else throw new Error("no have comments");

    return res;
  } catch (error) {
    return error.message;
  }
}
console.log(cutComments(code));
