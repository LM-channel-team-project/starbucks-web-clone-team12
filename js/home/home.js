const beanSection = document.querySelector("#bean__wrap");
const beanImg = document.querySelector(".bean__img");
const beanContent = document.querySelector(".bean__contents");

const favText1 = document.querySelector(".fav__txt1");
const favText2 = document.querySelector(".fav__txt2");

document.addEventListener("scroll", () => {
  const scrollY = window.scrollY;

  if (scrollY > 154) {
    beanContent.className = "moveBean__Content";
    beanImg.className = "moveBean__img";
  } else {
    beanContent.classList.remove("moveBean__Content");
    beanImg.classList.remove("moveBean__img");
  }
  if (1129 < scrollY) {
    favText1.className = "moveFavText1";
    favText2.className = "moveFavText2";
  } else {
    favText1.classList.remove("moveFavText1");
    favText2.classList.remove("moveFavText2");
  }
});
