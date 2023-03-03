// У вас есть кнопка. После каждого нажатия менять background.
let btn = document.querySelector("button");
let flag = true;

btn.addEventListener("click", function () {
  if (flag) {
    btn.style = "background-color: green; color: white";
    flag = false;
  } else {
    btn.style = "background-color: black; color: white";
    flag = true;
  }
});
