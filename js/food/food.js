const food_kind_btn = document.querySelector(".food_kind_btn");
const icon = document.querySelector(".fa-chevron-down");
const food_kind_check = document.querySelector("#food_kind_check");

food_kind_btn.addEventListener("click", () => {
  food_kind_check.classList.toggle("active");
  icon.classList.toggle("fa-chevron-up");
  icon.classList.toggle("fa-chevron-down");
});
