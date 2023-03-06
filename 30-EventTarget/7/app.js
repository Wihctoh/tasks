// Дана таблица c 1 колонкой. Под таблицей
// сделайте форму (инпут и кнопка), с помощью
// которой можно будет добавить нового
// значение в таблицу.

document.querySelector("button").addEventListener("click", function () {
  const inp = document.querySelector("input");
  const tableBody = document.querySelector("tbody");
  let tableTr = document.querySelectorAll("tr");
  let tableTd = document.querySelectorAll("td");
  let addTr = document.createElement("tr");
  let addTd = document.createElement("td");

  tableTr.forEach(function (el,index) {
    tableBody.append(addTr);
    el.append(addTd);
    el.innerHTML = inp.value;
  });
});
