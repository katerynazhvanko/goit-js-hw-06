const createBtn = document.querySelector("[data-create]");
const destroyBtn = document.querySelector("[data-destroy]");
const inputAmount = document.querySelector("input");
console.log(createBtn, destroyBtn, inputAmount);

function createBoxes(amount) {
  const boxesEl = document.createElement("div");
  console.log(boxesEl);
}
console.log(createBoxes());
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
