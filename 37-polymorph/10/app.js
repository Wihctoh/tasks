// Вывести в строчку все вводимые значения через инпут в виде массива. Добавить
// проверку, что поле не пустое. После каждого клика очищать значение input. Если
// вводимое значение не проходит валидацию, то на месте массива вывести
// сообщение об ошибке красным цветом

let arr = [];

document.querySelector("button").addEventListener("click", () => {
  try {
    const inp = document.querySelector("input");
    const div = document.querySelector("div");

    if (!inp.value) {
      inp.style = "border: 1px solid red;";
      div.style = "color: red";
      div.innerHTML = "Is empty!";

      throw new Error("empty!");
    }

    arr.push(inp.value);

    div.innerHTML = arr;

    inp.value = "";
  } catch (error) {
    return error.message;
  }
});
