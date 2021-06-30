const food_kind_btn = document.querySelector(".food_kind_btn");
const icon = document.querySelector(".fa-chevron-down");
const food_kind_check = document.querySelector("#food_kind_check");

const foodKindTab = document.querySelector("#food_kind_tab");
const foodThemeTab = document.getElementById("theme_tab");

const dt1Content = document.querySelector(".dt1_content");
const dt2Content = document.querySelector(".dt2_content");

const categoryList = document.querySelector(".categoryList");
const themeList = document.querySelector(".themeList");

food_kind_btn.addEventListener("click", () => {
  food_kind_check.classList.toggle("active");
  icon.classList.toggle("fa-chevron-up");
  icon.classList.toggle("fa-chevron-down");
});

foodKindTab.addEventListener("click", () => {
  foodKindTab.classList.add("selected");
  foodThemeTab.classList.remove("selected");
  dt1Content.style.display = "block";
  dt2Content.style.display = "none";
  categoryList.style.display = "block";
  themeList.style.display = "none";
});

foodThemeTab.addEventListener("click", () => {
  foodKindTab.classList.remove("selected");
  foodThemeTab.classList.add("selected");
  dt1Content.style.display = "none";
  dt2Content.style.display = "block";
  categoryList.style.display = "none";
  themeList.style.display = "block";
});
