let counterValue = 0;

const listEl = document.getElementById("counter");

const valueEl = document.getElementById("value");

const decEl = listEl.firstElementChild;

const incEl = listEl.lastElementChild;

decEl.addEventListener("click", () => {
  counterValue -= 1;
  valueEl.innerHTML = counterValue;
});
incEl.addEventListener("click", () => {
  counterValue += 1;
  valueEl.innerHTML = counterValue;
});
