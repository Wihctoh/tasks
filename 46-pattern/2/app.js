// Вы вводите числа в поле для ввода формируя массив.
// Необходимо отобразить массив, а также отдельно
// все четные элементы этого массива и нечетные

const resultArr = [];

document.querySelector("button").addEventListener("click", () => {
  const inp = document.querySelector("input").value;
  const div1 = document.querySelector(".new1");
  const div2 = document.querySelector(".new2");
  const div3 = document.querySelector(".new3");
  const even = [];
  const not_even = [];

  resultArr.push(inp);
  div1.innerHTML = resultArr;

  for (let i = 0; i < inp.length; i++) {
    if (inp[i] % 2 === 0) {
      even.push(inp[i]);
    } else not_even.push(inp[i]);
  }

  div2.innerHTML = even;
  div3.innerHTML = not_even;
});
