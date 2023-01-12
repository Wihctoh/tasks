// Найти квадратный корень числа. Если же число без плавающей точки, то просто
// вывести его. В противном случае необходимо округлить число до целых. Добавить
// проверку на ввод только чисел

const a = prompt("введите число");
const b = Math.sqrt(a);

if (isNaN(a)) {
  console.log("ошибка");
} else {
  if (Number.isInteger(b)) {
    console.log(b);
  } else {
    console.log(Math.round(b));
  }
}
