// На вход подается строка. Необходимо сложить все элементы числа. Добавить
// проверку на ввод только чисел
// 53 -> 8
// 135 -> 9

const str = "53".trim();
result = 0;

if (!isNaN(str)) {
  for (let i = 0; i < str.length; i++) {
    result += +str[i];
  }
} else console.log("error");

console.log(result);
