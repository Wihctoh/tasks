// Пользователь вводит число от 1 до 7, соответствующее дню недели. Необходимо
// вывести день для введенного числа.
// 1 -> Понедельник

const a = +prompt("введите число");

switch (a) {
  case 1:
    console.log("понедельник");
    break;
  case 2:
    console.log("вторник");
    break;
  case 3:
    console.log("среда");
    break;
  case 4:
    console.log("четверг");
    break;
  case 5:
    console.log("пятница");
    break;
  case 6:
    console.log("суббота");
    break;
  case 7:
    console.log("воскресенье");
    break;
  default:
    console.log("ошибка ввода");
    break;
}
