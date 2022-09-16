const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ulElem = document.querySelector("#ingredients");

for (let index = 0; index < ingredients.length; index++) {
  const liElem = document.createElement("li");
  liElem.textContent = ingredients[index];
  liElem.classList.add("item");
  ulElem.appendChild(liElem);
}
