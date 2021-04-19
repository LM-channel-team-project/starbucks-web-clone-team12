const productKindButton = document.querySelector(".product_kind_btn");
const productKindButtonImage = document.querySelector("#kind_btn");
const product_kind_check_view = document.querySelector("#product_kind_check");
let cnt = 1;
const handleClick = () => {
  if (cnt % 2 == 1) {
    productKindButtonImage.src =
      "https://image.istarbucks.co.kr/common/img/menu/list_down_btn.png";
    product_kind_check_view.style.display = "none";
  } else {
    productKindButtonImage.src =
      "https://image.istarbucks.co.kr/common/img/menu/list_up_btn.png";
    product_kind_check_view.style.display = "block";
  }
  cnt++;
};

productKindButton.addEventListener("click", handleClick);
