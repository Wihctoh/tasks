// Вы вводите строку. Неоходимо проверить является ли эта строка датой и
// соответствует шаблону вида хх-хх-хххх

document.querySelector("button").addEventListener("click", () => {
  const inp = document.querySelector("input").value;
  const div = document.querySelector("div");

  if (!/^(\-|\+)[0-9]+$/gm.test(inp)) {
    div.innerHTML = inp;
  } else console.log(false);
});
