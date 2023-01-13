// Пользователь вводит номер месяц. Необходимо вывести пору года по номеру
// месяца (2 способа)

let monthNumber = prompt("введите номер месяца");

if (isNaN(monthNumber)) {
  console.log("введите число");
} else {
  monthNumber = +monthNumber;

  if (monthNumber >= 3 && monthNumber <= 5) {
    console.log("весна");
  } else if (monthNumber >= 6 && monthNumber <= 8) {
    console.log("лето");
  } else if (monthNumber >= 9 && monthNumber <= 11) {
    console.log("осень");
  } else if (monthNumber === 1 || monthNumber === 2 || monthNumber === 12) {
    console.log("зима");
  } else {
    console.log("неверный ввод");
  }
}

switch (+monthNumber) {
  case 3:
    console.log("весна");
    break;
  case 4:
    console.log("весна");
    break;
  case 5:
    console.log("весна");
    break;
  case 6:
    console.log("лето");
    break;
  case 7:
    console.log("лето");
    break;
  case 8:
    console.log("лето");
    break;
  case 9:
    console.log("осень");
    break;
  case 10:
    console.log("осень");
    break;
  case 11:
    console.log("осень");
    break;
  case 1:
    console.log("зима");
    break;
  case 2:
    console.log("зима");
    break;
  case 12:
    console.log("зима");
    break;

  default:
    console.log("неверный ввод");
    break;
}
