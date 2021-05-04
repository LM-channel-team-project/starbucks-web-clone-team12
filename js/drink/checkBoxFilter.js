const loadItems = async () =>
  await fetch("../../data/drink.json")
    .then((response) => response.json())
    .then((json) => json);

loadItems().then((items) => {
  allDisplay(items);
  setEventListeners(items);
});
// 모두 보여주기
const allDisplay = (items) => {
  const allInclude = Object.keys(items).reduce((obj, key) => {
    return { ...obj, [key]: items[key] };
  }, {});
  allResult = Object.values(allInclude);
  const title = document.querySelector(".category_title");
  const container = document.querySelector(".list");
  title.style.display = "block";
  title.innerHTML = allResult.map((title) => title[0].category);
  container.innerHTML = allResult.map((item) =>
    item
      .map((sub) => createHTMLString(sub))
      .join("")
      .split()
  );
};

// 체크박스 체크 할때
const setEventListeners = (items) => {
  const checkType = [
    "all",
    "coldBrew",
    "brood",
    "espresso",
    "frappuccino",
    "blended",
    "fizzo",
    "tea",
    "etc",
    "juice",
  ];
  for (let count = 0; count < checkType.length; count++) {
    checkboxDocument(`${checkType[count]}`, items);
  }
};

const checkboxDocument = (id, items) => {
  document.getElementById(`${id}`).addEventListener("click", (event) => {
    filter(event, items);
  });
};

const filter = (event, items) => {
  const { value } = event.target.dataset;
  if (value === "all") {
    const allInclude = Object.keys(items).reduce((obj, key) => {
      return { ...obj, [key]: items[key] };
    }, {});
    allResult = Object.values(allInclude);
    DisplayItems(event, allResult);
  } else {
    const allowed = [`${value}`];
    const filtered = Object.keys(items)
      .filter((key) => allowed.includes(key))
      .reduce((obj, key) => {
        return { ...obj, [key]: items[key] };
      }, {});
    result = Object.values(filtered);
    DisplayItems(event, result);
  }

  const obj = document.getElementsByName("product");
  const a = event.target;
  for (let i = 0; i < obj.length; i++) {
    if (obj[i] != a) {
      obj[i].checked = false;
    }
  }
};

const DisplayItems = (event, items) => {
  const { value } = event.target.dataset;

  const title = document.querySelector(".category_title");
  const container = document.querySelector(".list");
  if (value === "all") {
    if (event.target.checked) {
      title.innerHTML = items.map((title) => title[0].category);
      title.style.display = "block";
      container.innerHTML = items.map((item) =>
        item.map((sub) => createHTMLString(sub)).join("")
      );
    } else {
      container.innerHTML = "";
      title.style.display = "none";
    }
  } else {
    if (event.target.checked) {
      title.innerHTML = items.map((title) => title[0].category);
      title.style.display = "block";
      container.innerHTML = items.map((item) =>
        item.map((sub) => createHTMLString(sub)).join("")
      );
    } else {
      container.innerHTML = "";
      title.style.display = "none";
    }
  }
};
const createHTMLString = (items) => {
  return `
    <li class="item">
      <div class="item_container">
        <div class="item_content">
          <img src="${items.img}" alt="${items.title}" class="item_thumbnail" />
        </div>
        <span class="item_description">${items.title}</span>
      </div>
    </li>
    `;
};
