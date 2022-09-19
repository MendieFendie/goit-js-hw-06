const inputEl = document.getElementById("font-size-control");
const outputEl = document.getElementById("text");

inputEl.step = "1";
inputEl.value = "16";
outputEl.style.fontSize = "16px";

inputEl.addEventListener(
  "input",
  (e) => (outputEl.style.fontSize = e.target.value + "px")
);
