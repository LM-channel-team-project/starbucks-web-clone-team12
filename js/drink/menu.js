"use strict";
const drinkKindButtonImage = document.querySelector("#kind_btn");
const icon = document.querySelector(".fa-chevron-down");
const drink_kind_check_view = document.querySelector("#drink_kind_check");
const drinkKindTab = document.getElementById("drink_kind_tab");
const drinkThemeTab = document.getElementById("theme_tab");
const dt1Content = document.querySelector(".dt1_content");
const dt2Content = document.querySelector(".dt2_content");
const categoryList = document.querySelector(".categoryList");
const themeList = document.querySelector(".themeList");

const handleClick = () => {
  drink_kind_check_view.classList.toggle("active");
  icon.classList.toggle("fa-chevron-up");
  icon.classList.toggle("fa-chevron-down");
};

document
  .querySelector(".drink_kind_btn")
  .addEventListener("click", handleClick); //화살표 버튼 클릭시

drinkKindTab.addEventListener("click", () => {
  drinkKindTab.classList.add("selected");
  drinkThemeTab.classList.remove("selected");
  dt1Content.style.display = "block";
  dt2Content.style.display = "none";
  categoryList.style.display = "block";
  themeList.style.display = "none";
}); //카테고리 버튼 클릭시

drinkThemeTab.addEventListener("click", () => {
  drinkKindTab.classList.remove("selected");
  drinkThemeTab.classList.add("selected");
  dt1Content.style.display = "none";
  dt2Content.style.display = "block";
  categoryList.style.display = "none";
  themeList.style.display = "block";
}); //테마 버튼 클릭시
