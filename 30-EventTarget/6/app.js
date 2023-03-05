// Вы вводите строку. Проверить является ли это слово палиндром. Добавить
// проверки

document.querySelector("button").addEventListener("click", function () {
  try {
    const inp = document.querySelector("input");
    const div = document.querySelector("div");

    if (!inp.value.trim()) throw new Error("empty");

    if (
      inp.value.toLowerCase() ===
      inp.value.toLowerCase().split("").reverse().join("")
    ) {
      div.innerHTML = "это палиндром";
    } else div.innerHTML = "это не палиндром";
  } catch (error) {
    alert(error.message);
  }
});
