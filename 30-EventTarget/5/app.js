// Добавьте картинку на страницу. При наведении на картинку мышкой необходимо
// ее изменять на другую картинку. Но как только мышка снова отходит в сторону, то
// возвращается первая картинка

const img = document.querySelector("img");

img.addEventListener("mouseover", function () {
  img.src = "./assets/HS (11).png";
});

img.addEventListener("mouseout", function () {
  img.src = "./assets/HS (10).png";
});
