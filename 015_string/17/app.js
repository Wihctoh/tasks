// На вход программе подается строка текста. Напишите программу, которая
// определяет является ли строка хорошей. Текст хороший, если содержит
// подстроку «хорош» во всевозможных регистрах.
// я очень хороший текст => true

const str = prompt("введите строку").trim().toLowerCase();

if (isNaN(str)) {
  if (str.split(" ").includes("хорош")) {
    console.log(true);
  } else console.log(false);
} else console.log("error");
