// Ввести строку. Проверить является ли это число или текст. Если число, то
// выяснить, четное или нет. Если это текст и равен “hschool”, вывести true. В
// противном случае false

let a = prompt("введите текст");

if (isNaN(a)) {
  if (a === "hschool") {
    console.log(true);
  } else {
    console.log(false);
  }
} else {
  if (a % 2 === 0) {
    console.log("четное");
  } else {
    console.log("нечетное");
  }
}
