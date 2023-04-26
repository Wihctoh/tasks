// У вас есть 3 инпута. Необходимо вывести в результат конкатенацию всех инпутов

document.querySelector("button").addEventListener("click", () => {
  const inp1 = document.querySelector(".inp1").value;
  const inp2 = document.querySelector(".inp2").value;
  const inp3 = document.querySelector(".inp3").value;
  const div = document.querySelector("div");

  div.innerHTML = inp1 + inp2 + inp3;
});
