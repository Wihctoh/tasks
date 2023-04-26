// При наведении на картинку изменять ее

document.querySelector("img").addEventListener("mouseover", function () {
  this.src = "./img3.jpg";
});

document.querySelector("img").addEventListener("mouseout", function () {
  this.src = "./img1.jpg";
});
