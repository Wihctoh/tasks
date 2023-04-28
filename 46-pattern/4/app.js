// Вы вводите строку. Неоходимо проверить является ли эта строка датой и
// соответствует шаблону вида хх-хх-хххх

document.querySelector("button").addEventListener("click", () => {
  const inp = document.querySelector("input").value;
  const div = document.querySelector("div");
  try {
    if (/^[0-9]{2,2}\-[0-9]{2,2}\-[0-9]{4,4}$/gm.test(inp)) {
      div.innerHTML = inp;
    } else throw new Error("incorrect date!");
  } catch (error) {
    alert(error.message);
  }
});
