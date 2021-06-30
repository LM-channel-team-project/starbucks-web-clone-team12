const onesun = document.querySelector(".onesun");
const brunch = document.querySelector(".brunch");
const everland = document.querySelector(".everland");
const wholeCake = document.querySelector(".wholeCake");
const jeju = document.querySelector(".jeju");
const themecontainer = document.querySelector(".themelist");
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

      const Click = () => {
        onesun.addEventListener("click", () => {
          onesun.classList.add("themeSelected");
          brunch.classList.remove("themeSelected");
          everland.classList.remove("themeSelected");
          wholeCake.classList.remove("themeSelected");
          jeju.classList.remove("themeSelected");
          Item("onesun");
        });
        brunch.addEventListener("click", () => {
          onesun.classList.remove("themeSelected");
          brunch.classList.add("themeSelected");
          everland.classList.remove("themeSelected");
          wholeCake.classList.remove("themeSelected");
          jeju.classList.remove("themeSelected");
          Item("brunch");
        });
        everland.addEventListener("click", () => {
          onesun.classList.remove("themeSelected");
          brunch.classList.remove("themeSelected");
          everland.classList.add("themeSelected");
          wholeCake.classList.remove("themeSelected");
          jeju.classList.remove("themeSelected");
          Item("everland");
        });
        wholeCake.addEventListener("click", () => {
          onesun.classList.remove("themeSelected");
          brunch.classList.remove("themeSelected");
          everland.classList.remove("themeSelected");
          wholeCake.classList.add("themeSelected");
          jeju.classList.remove("themeSelected");
          Item("wholeCake");
        });
        jeju.addEventListener("click", () => {
          onesun.classList.remove("themeSelected");
          brunch.classList.remove("themeSelected");
          everland.classList.remove("themeSelected");
          wholeCake.classList.remove("themeSelected");
          jeju.classList.add("themeSelected");
          Item("jeju");
        });
      };
      Click();

      const Item = (values) => {
        const themeItem = data.filter((itema) =>
          Object.keys(itema).includes("theme")
        );
        const items = themeItem.filter((value) =>
          Object.values(value).includes(values)
        );
        themecontainer.innerHTML = CreateItemHTML(items);
      };
      const CreateItemHTML = (item) => {
        const itemList = item
          .map((list) => {
            return `
          <li class="item">
          <div class="item_container">
            <div class="item_content">
              <img src=${list.img} alt="${list.title}" class="item_thumbnail" />
            </div>
            <span class="item_description">${list.title}</span>
          </div>
        </li>
        `;
          })
          .join("");
        return `
        <div class="item_list">
          ${itemList}
        </div>
        `;
      };
    });
loadThemeItems();
