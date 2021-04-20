const drinkKindButton = document.querySelector(".drink_kind_btn");
const drinkKindButtonImage = document.querySelector("#kind_btn");
const drink_kind_check_view = document.querySelector("#drink_kind_check");
let cnt = 1;

const handleClick = () => {
  if (cnt % 2 == 1) {
    drinkKindButtonImage.src =
      "https://image.istarbucks.co.kr/common/img/menu/list_down_btn.png";
    drink_kind_check_view.style.display = "none";
    drinkKindButtonImage.setAttribute("alt", "분류보기 메뉴 펼치기");
  } else {
    drinkKindButtonImage.src =
      "https://image.istarbucks.co.kr/common/img/menu/list_up_btn.png";
    drink_kind_check_view.style.display = "block";
    drinkKindButtonImage.setAttribute("alt", "분류보기 메뉴 접기");
  }
  cnt++;
};

drinkKindButton.addEventListener("click", handleClick);
