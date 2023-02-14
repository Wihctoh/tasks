// На входе число n. Напишите функцию, которая переворачивает число.

const num = "12";

function reverse(num_) {
  return num_.split("").reverse().join("");
}

let result = reverse(num);

console.log(result);
