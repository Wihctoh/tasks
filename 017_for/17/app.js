// Дан массив с элементами 1, 2, 3, 4, 5, 6, 7, 8, 9. С помощью цикла for создайте строку
// '-1-2-3-4-5-6-7-8-9-‘

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let result = 0;

for (let i = 0; i < arr.length; i++) {
  result += "-" + arr[i];
}

console.log(result.slice(1) + "-");
