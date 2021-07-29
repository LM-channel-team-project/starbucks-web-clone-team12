const beanSection = document.querySelector("#bean__wrap");
const beanImg = document.querySelector(".bean__img");
const beanContent = document.querySelector(".bean__contents");

const favText1 = document.querySelector(".fav__txt1");
const favText2 = document.querySelector(".fav__txt2");

const mzRight = document.querySelector(".mz__right");
const mzBtn = document.querySelector(".mz__btn");

const storeImg1 = document.querySelector(".store__img1");
const storeImg2 = document.querySelector(".store__img2");
const storeImg3 = document.querySelector(".store__img3");
const storeImg4 = document.querySelector(".store__img4");
const storeTxt1 = document.querySelector(".store__txt1");
const storeTxt2 = document.querySelector(".store__txt2");
const storeBtn = document.querySelector(".store__btn");

document.addEventListener("scroll", () => {
  const scrollY = window.scrollY;
  console.log(scrollY);
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
  if (1928 < scrollY) {
    mzRight.className = "moveMzRight";
    mzBtn.className = "moveMzBtn";
  } else {
    mzRight.classList.remove("moveMzRight");
    mzBtn.classList.remove("moveMzBtn");
  }
  if (2590 < scrollY) {
    storeImg1.className = "moveStoreImg1";
    storeImg2.className = "moveStoreImg2";
    storeImg3.className = "moveStoreImg3";
    storeImg4.className = "moveStoreImg4";
    storeTxt1.className = "moveStoreTxt1";
    storeTxt2.className = "moveStoreTxt2";
    storeBtn.className = "moveStoreBtn";
  } else {
    storeImg1.classList.remove("moveStoreImg1");
    storeImg2.classList.remove("moveStoreImg2");
    storeImg3.classList.remove("moveStoreImg3");
    storeImg4.classList.remove("moveStoreImg4");
    storeTxt1.classList.remove("moveStoreTxt1");
    storeTxt2.classList.remove("moveStoreTxt2");
    storeBtn.classList.remove("moveStoreBtn");
  }
});
