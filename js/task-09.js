const buttonChangeColor = document.querySelector(".change-color");
const textColor = document.querySelector(".color");

buttonChangeColor.addEventListener("click", () => {
  const changeColor = getRandomHexColor();
  document.body.style.backgroundColor = changeColor;
  textColor.textContent = changeColor;
});
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
