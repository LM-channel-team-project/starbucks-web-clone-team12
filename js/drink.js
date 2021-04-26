"use strict";
const drinkKindButtonImage = document.querySelector("#kind_btn");
const drink_kind_check_view = document.querySelector("#drink_kind_check");
const drinkKindTab = document.getElementById("drink_kind_tab");
const drinkThemeTab = document.getElementById("theme_tab");
const dt1Content = document.querySelector(".dt1_content");
const dt2Content = document.querySelector(".dt2_content");
const categoryList = document.querySelector(".categoryList");
const themeList = document.querySelector(".themeList");

let clicked = 0;
const handleClick = () => {
  if (clicked) {
    drinkKindButtonImage.src =
      "https://image.istarbucks.co.kr/common/img/menu/list_up_btn.png";
    drink_kind_check_view.style.display = "block";
    drinkKindButtonImage.setAttribute("alt", "분류보기 메뉴 접기");
    clicked = 0;
  } else {
    drinkKindButtonImage.src =
      "https://image.istarbucks.co.kr/common/img/menu/list_down_btn.png";
    drink_kind_check_view.style.display = "none";
    drinkKindButtonImage.setAttribute("alt", "분류보기 메뉴 펼치기");

    clicked = 1;
  }
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

const loadItems = async () =>
  await fetch("../../data/drink.json")
    .then((response) => response.json())
    .then((json) => json);

const createHTMLString = (item) => {
  return `
        <li class="item">
        <img src="${item.img}" alt="${item.category}" class="item_thumbnail" />
        <span class="item_description">${item.title}</span>
        </li>
        `;
};
const displayItems = (items) => {
  const container = document.querySelector(".list");
  container.innerHTML = items.map((item) => createHTMLString(item)).join("");
};

loadItems().then((items) => {
  displayItems(items);
});
