const listCategories = document.querySelector("#categories");
const itemsCategories = listCategories.querySelectorAll(".item");

console.log(`Number of categories:` + itemsCategories.length);

itemsCategories.forEach((item) => {
  const titleCategories = item.querySelector("h2").textContent;
  const itemCategories = item.querySelectorAll("li").length;
  console.log(`Category: ${titleCategories}\nElements: ${itemCategories}`);
});
