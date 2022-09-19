function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const bodyColor = document.querySelector("body");

const textEl = document.querySelector(".color");
const changeColorBtnEl = document.querySelector(".change-color");

changeColorBtnEl.addEventListener("click", (event) => {
  changeColor(getRandomHexColor());
});

function changeColor(changeColor) {
  bodyColor.style.backgroundColor = changeColor;
  textEl.textContent = changeColor;
}
