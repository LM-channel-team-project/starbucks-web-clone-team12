const loadItems = async () =>
  await fetch("../../data/drink.json")
    .then((response) => response.json())
    .then((json) => json);

loadItems().then((items) => {
  setEventListeners(items);
});

const setEventListeners = (items) => {
  document.getElementById("coldBrew").addEventListener("click", (event) => {
    filter(event, items);
  });
  document.getElementById("brood").addEventListener("click", (event) => {
    filter(event, items);
  });
  document.getElementById("espresso").addEventListener("click", (event) => {
    filter(event, items);
  });
  document.getElementById("frappuccino").addEventListener("click", (event) => {
    filter(event, items);
  });
  document.getElementById("blended").addEventListener("click", (event) => {
    filter(event, items);
  });
  document.getElementById("fizzo").addEventListener("click", (event) => {
    filter(event, items);
  });
  document.getElementById("tea").addEventListener("click", (event) => {
    filter(event, items);
  });
  document.getElementById("etc").addEventListener("click", (event) => {
    filter(event, items);
  });
  document.getElementById("juice").addEventListener("click", (event) => {
    filter(event, items);
  });
};

const filter = (event, items) => {
  console.log(event.target);
  const { value } = event.target.dataset;
  const allowed = [`${value}`];
  const filtered = Object.keys(items)
    .filter((key) => allowed.includes(key))
    .reduce((obj, key) => {
      return { ...obj, [key]: items[key] };
    }, {});
  result = Object.values(filtered);
  DisplayItems(event, result);
  const obj = document.getElementsByName("product");
  const a = event.target;
  for (let i = 0; i < obj.length; i++) {
    if (obj[i] != a) {
      obj[i].checked = false;
    }
  }
};

const DisplayItems = (event, items) => {
  const title = document.querySelector(".category_title");
  const container = document.querySelector(".list");
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
