// После нажатия на кнопку «Разблокировать» мы можем вносить изменения в
// инпут. После нажатия на заблокировать данное действие запрещается, тем самым
// выключая возможность редактирования значения инпута

const btn1 = document.querySelector(".btn1");
const btn2 = document.querySelector(".btn2");
const inp = document.querySelector("input");

btn1.addEventListener("click", function () {
  inp.removeAttribute("disabled");
});

btn2.addEventListener("click", function () {
  inp.setAttribute("disabled", "disabled");
});
