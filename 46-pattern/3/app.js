// Вы вводите числа в поле для ввода формируя и отображая массив.
// Необходимо также отображать только уникальные значения массива
// [1, 1, 4, 2, 3, 3] -> [4, 2]

let arr = [];

document.querySelector("button").addEventListener("click", () => {
  const inp = document.querySelector("input").value;
  const div1 = document.querySelector(".div1");
  const div2 = document.querySelector(".div2");

  arr.push(inp);
  div1.innerHTML = arr;

  let newArr = [];

  for (let i = 0; i < inp.length; i++) {
    if (!newArr.includes(arr[i])) {
      newArr.push(arr[i]);
    }
  }
  div2.innerHTML = newArr;
});
