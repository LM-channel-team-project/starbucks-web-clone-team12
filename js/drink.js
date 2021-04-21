const drinkKindButton = document.querySelector(".drink_kind_btn");
const drinkKindButtonImage = document.querySelector("#kind_btn");
const drink_kind_check_view = document.querySelector("#drink_kind_check");
const drinkKindTab = document.getElementById("drink_kind_tab");
const drinkThemeTab = document.getElementById("theme_tab");
const dt1Content = document.querySelector(".dt1_content");
const dt2Content = document.querySelector(".dt2_content");
let clicked = 0;

const handleClick = () => {
  if (clicked) {
    drinkKindButtonImage.src =
      "https://image.istarbucks.co.kr/common/img/menu/list_down_btn.png";
    drink_kind_check_view.style.display = "none";
    drinkKindButtonImage.setAttribute("alt", "분류보기 메뉴 펼치기");
    clicked = 0;
  } else {
    drinkKindButtonImage.src =
      "https://image.istarbucks.co.kr/common/img/menu/list_up_btn.png";
    drink_kind_check_view.style.display = "block";
    drinkKindButtonImage.setAttribute("alt", "분류보기 메뉴 접기");
    clicked = 1;
  }
};

function drinkKindTabClick() {
  drinkKindTab.classList.add("selected");
  drinkThemeTab.classList.remove("selected");
  dt1Content.style.display = "block";
  dt2Content.style.display = "none";
}
function drinkThemeTabClick() {
  drinkKindTab.classList.remove("selected");
  drinkThemeTab.classList.add("selected");
  dt1Content.style.display = "none";
  dt2Content.style.display = "block";
}

drinkKindButton.addEventListener("click", handleClick); //화살표 버튼 클릭시
drinkKindTab.addEventListener("click", drinkKindTabClick); //카테고리 버튼 클릭시
drinkThemeTab.addEventListener("click", drinkThemeTabClick); //테마 버튼 클릭시

const loadItem = async () =>
  await fetch("../../data/drink.json")
    .then((response) => response.json())
    .then((json) => json);

loadItem().then((items) => console.log(items));
