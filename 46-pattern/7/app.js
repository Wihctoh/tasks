// Вы вводите числа в поле для ввода формируя и отображая массив.
// Необходимо вывести все числа кратные 3

let arr = [];

document.querySelector("button").addEventListener("click", () => {
  const inp = document.querySelector("input").value;
  const div1 = document.querySelector(".div1");
  const div2 = document.querySelector(".div2");

  arr.push(inp);

  div1.innerHTML = arr;

  div2.innerHTML = arr.filter((el) => el % 3 == 0);
});
