const box = document.querySelectorAll(".box img");
const resim = document.querySelectorAll(".resim img");

resim.forEach((img) => {
  img.addEventListener("click", function (event) {
    box.forEach((boxImg) => {

      boxImg.src = event.target.src;
      boxImg.style.transform="rotateY(360deg)"
      boxImg.style.transition="5000ms"
    });
  });
});