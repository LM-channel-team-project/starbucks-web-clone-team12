document
  .querySelector("#all")
  .addEventListener("click", (event) => loadItems(event));
document
  .querySelector("#bakery")
  .addEventListener("click", (event) => loadItems(event));
document
  .querySelector("#cake")
  .addEventListener("click", (event) => loadItems(event));
document
  .querySelector("#sandwich")
  .addEventListener("click", (event) => loadItems(event));
document
  .querySelector("#warm_food")
  .addEventListener("click", (event) => loadItems(event));
document
  .querySelector("#fruit_yogurt")
  .addEventListener("click", (event) => loadItems(event));
document
  .querySelector("#snack")
  .addEventListener("click", (event) => loadItems(event));
document
  .querySelector("#ice_cream")
  .addEventListener("click", (event) => loadItems(event));

const container = document.querySelector(".list");
const loadItems = async (event) =>
  await fetch("../../data/food.json")
    .then((response) => response.json())
    .then((json) => {
      if (event.target.id !== "all") {
        for (let i = 0; i <= Object.keys(json).length; i++) {
          Object.keys(json)[i] === event.target.id ? items(event) : false;
        }
      } else {
        if (event.target.checked) {
          container.style.display = "block";
          allDisplay(json);
        } else {
          container.style.display = "none";
        }
      }
    });

const allDisplay = (items) => {
  console.log(items);
  const title = Object.keys(items);
  container.innerHTML = title
    .map((sub) => createHTMLString(sub, items))
    .join(" ");
};

const createHTMLString = (sub, items) => {
  console.log(items[sub]);

  const list = items[sub]
    .map((abc) => {
      return `
        <li class="item">
          <div class="item_container">
            <div class="item_content">
              <img src=${abc.img} alt="${abc.title}" class="item_thumbnail" />
            </div>
            <span class="item_description">${abc.title}</span>
          </div>
        </li>
        `;
    })
    .join(" ");

  return `
    <h1 class="category_title">
    ${sub}
    </h1>
    <div class="item_list">
    ${list}
    </div>
    `;
};
const items = (event) => {
  console.log(event.target.id);
};

// all누르면 모든 페이지가 출력되고 (각 항목의 타이틀 + 리스트)

// 만일 all 나머지를 클릭하게 되면 그 체크된 항목에 따라 하나씩 출력된다.

// event.target.id가 food.json의 메뉴객체 이름이 같게 되면 그 객체의 value가  출력되게 해야 한다.

// 항목은 타이틀(메뉴의 객체) + 리스트(객체의 밸류) 형태로 출력 할것.
