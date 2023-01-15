// Преобразовать строку ‘Full StaCK DevELoper’ в массив вида [‘full, ‘stack’, ‘developer’]

const a = "Full StaCK DevELoper".trim().split(" ");

if (isNaN(a)) {
  console.log(a);
} else {
  console.log("error");
}

console.log(isNaN(a) ? console.log(a) : console.log("error"));
