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

const allCheckDisplayItems = (event, items) => {
  //json 데이터 화면에 표시
  const container = document.querySelector(".list");
  if (event.target.checked) {
    container.innerHTML = items.map((item) => createHTMLString(item)).join("");
  } else {
    container.innerHTML = "";
  }
};

const setEventListeners = (items) => {
  const alls = document.querySelector("#product_all");
  alls.addEventListener("click", (event) => allCheckDisplayItems(event, items));
};

const getCheckboxValue = (event, items) => {
  const { key, value } = event.target.dataset;
  let result = "";
  if (event.target.checked) {
    if (key == null || value == null) return;
    result = items
      .filter((item) => item[key] === value)
      .map((item) => item.title);
  } else {
    result = "";
  }
  document.getElementById("result").innerText = result;
};

loadItems().then((items) => {
  setEventListeners(items);
});
