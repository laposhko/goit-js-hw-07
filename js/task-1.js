const categories = document.querySelectorAll(".item");

console.log(categories.length);

categories.forEach((category) => {
  console.log(category.querySelector("h2").textContent);

  console.log(category.querySelector("ul").children.length);
});
