const input = document.getElementById("validation-input");
const length = document.querySelector('input[data-length="6"]');

input.addEventListener("click", removeGreen);
input.addEventListener("click", removeRed);
input.addEventListener("blur", onRed);
input.addEventListener("blur", onGreen);

function onGreen() {
  if (input.value.length >= length.dataset.length) {
    input.classList.add("valid");
  }
}
function onRed() {
  if (input.value.length < length.dataset.length) {
    input.classList.add("invalid");
  }
}

function removeGreen() {
  input.classList.remove("valid");
}
function removeRed() {
  input.classList.remove("invalid");
}
