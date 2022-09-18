const rangeInput = document.querySelector('input[type="range"]');
const input = document.getElementById("font-size-control");
const output = document.getElementById("text");

input.step = "1";
input.value = "16";
output.style.fontSize = "16px";

rangeInput.addEventListener(
  "input",
  (e) => (output.style.fontSize = e.target.value + "px")
);
