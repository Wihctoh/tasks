// Пользователь вводит n – порядковый номер числа из ряда Фибоначчи.
// Реализуйте функцию на поиск числа n в данной последовательности используя
// рекурсию
// 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, …
// 5 -> 5
// 10 -> 55
// 7 -> 13

const num = 10;

function fibonachi(num_) {
  if (num_ == 1) return 1;
  if (num_ == 0) return 0;
  if (num > 1) {
    return fibonachi(num_ - 2) + fibonachi(num_ - 1);
  }
}

let result = fibonachi(num);

console.log(result);
