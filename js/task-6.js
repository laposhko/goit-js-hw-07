function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
let amount;
const input = document.querySelector("#controls input");
input.addEventListener("input", (event) => {
  amount = event.target.value;
});
const createButton = document.querySelector("[data-create]");
const destroyButton = document.querySelector("[data-destroy]");
const boxesField = document.querySelector("#boxes");
function createBoxes() {
  destroyBoxes();
  if (amount < 100) {
    let size = 30;
    for (let i = 0; i < amount; i++) {
      const newBox = document.createElement("div");
      newBox.style.width = `${size}px`;
      newBox.style.height = `${size}px`;
      newBox.style.backgroundColor = getRandomHexColor();
      boxesField.append(newBox);
      size = size + 10;
    }
  }
  amount = 0;
  input.value = "";
}
function destroyBoxes() {
  boxesField.innerHTML = "";
}
createButton.addEventListener("click", createBoxes);
destroyButton.addEventListener("click", destroyBoxes);
