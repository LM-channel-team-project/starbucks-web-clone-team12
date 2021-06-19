const onesun = document.querySelector(".onesun");
const brunch = document.querySelector(".brunch");
const everland = document.querySelector(".everland");
const wholeCake = document.querySelector(".wholeCake");
const jeju = document.querySelector(".jeju");

const Click = () => {
  onesun.addEventListener("click", (event) => {
    onesun.classList.add("themeSelected");
    brunch.classList.remove("themeSelected");
    everland.classList.remove("themeSelected");
    wholeCake.classList.remove("themeSelected");
    jeju.classList.remove("themeSelected");
  });
  brunch.addEventListener("click", (event) => {
    onesun.classList.remove("themeSelected");
    brunch.classList.add("themeSelected");
    everland.classList.remove("themeSelected");
    wholeCake.classList.remove("themeSelected");
    jeju.classList.remove("themeSelected");
  });
  everland.addEventListener("click", (event) => {
    onesun.classList.remove("themeSelected");
    brunch.classList.remove("themeSelected");
    everland.classList.add("themeSelected");
    wholeCake.classList.remove("themeSelected");
    jeju.classList.remove("themeSelected");
  });
  wholeCake.addEventListener("click", (event) => {
    onesun.classList.remove("themeSelected");
    brunch.classList.remove("themeSelected");
    everland.classList.remove("themeSelected");
    wholeCake.classList.add("themeSelected");
    jeju.classList.remove("themeSelected");
  });
  jeju.addEventListener("click", (event) => {
    onesun.classList.remove("themeSelected");
    brunch.classList.remove("themeSelected");
    everland.classList.remove("themeSelected");
    wholeCake.classList.remove("themeSelected");
    jeju.classList.add("themeSelected");
  });
};
Click();

const loadThemeItems = async (event) =>
  await fetch("../../data/food.json")
    .then((response) => response.json())
    .then((json) => {
      const data = Object.values(json)[0].concat(
        Object.values(json)[1],
        Object.values(json)[2],
        Object.values(json)[3],
        Object.values(json)[4],
        Object.values(json)[5],
        Object.values(json)[6]
      );
      console.log(
        data
          .map((item) => item)
          .filter((itema) => Object.keys(itema).includes("theme"))
      );
    });
loadThemeItems();
