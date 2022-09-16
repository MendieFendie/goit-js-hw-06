const listEl = document.getElementById("categories");
console.log("Number of categories:", listEl.childElementCount);

const listItemEl = document.querySelectorAll(".item");
listItemEl.forEach((element) => {
  console.log("Category:", element.firstElementChild.textContent);
  console.log("Elements:", element.lastElementChild.childElementCount);
});
