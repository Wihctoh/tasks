// По условию задачи даны инпут и кнопка. Необходимо преобразовать строку в
// CamelCase (примерСтрокиВCamelCase )

document.querySelector("button").addEventListener("click", function () {
  try {
    const inp = document.querySelector("input");
    const div = document.querySelector("div");

    isValid(inp);

    let str = inp.value.trim().toLowerCase().split(" ");
    let resStr = "";

    for (let i = 0; i < str.length; i++) {
      resStr += str[i][0].toUpperCase() + str[i].slice(1);
    }

    div.innerHTML = resStr;
  } catch (error) {
    alert(error.message);
  }
});

function isValid(inp) {
  if (!inp.value) throw new Error("empty");
  if (!isNaN(inp.value)) throw new Error("not a text");
}
