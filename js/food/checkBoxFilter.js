const inputBakery = document.querySelector("#bakery");
const inputCake = document.querySelector("#cake");
const inputSandwich = document.querySelector("#sandwich");
const inputWarmFood = document.querySelector("#warm_food");
const inputFruitYogurt = document.querySelector("#fruit_yogurt");
const inputSnack = document.querySelector("#snack");
const inputIceCream = document.querySelector("#ice_cream");

const loadItems = async (event) =>
  await fetch("../../data/food.json")
    .then((response) => response.json())
    .then((json) => {
      for (let i = 0; i <= Object.keys(json).length; i++) {
        Object.keys(json)[i] === event.target.id ? aaa(event) : false;
      }
    });
const aaa = (event) => {
  console.log(event.target.id);
};

inputBakery.addEventListener("click", (event) => loadItems(event));
inputCake.addEventListener("click", (event) => loadItems(event));
inputSandwich.addEventListener("click", (event) => loadItems(event));
inputWarmFood.addEventListener("click", (event) => loadItems(event));
inputFruitYogurt.addEventListener("click", (event) => loadItems(event));
inputSnack.addEventListener("click", (event) => loadItems(event));
inputIceCream.addEventListener("click", (event) => loadItems(event));
