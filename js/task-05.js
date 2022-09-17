const input = document.getElementById("name-input");
const nameEl = document.getElementById("name-output");

input.addEventListener("input", onInputChange);

function onInputChange(event) {
  nameEl.textContent = event.currentTarget.value;
}

// input.addEventListener("blur", onNotChange);

// function onNotChange() {
//   nameEl.textContent = "Anonymous";
// }
