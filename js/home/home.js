const beanSection = document.querySelector("#bean__wrap");
const beanImg = document.querySelector(".bean__img");
const beanContent = document.querySelector(".bean__contents");

document.addEventListener("scroll", () => {
  const scrollY = window.scrollY;
  if (scrollY > 177) {
    beanContent.className = "moveBean__Content";
    beanImg.className = "moveBean__img";
  } else {
    beanContent.classList.remove("moveBean__Content");
    beanImg.classList.remove("moveBean__img");
  }
});
