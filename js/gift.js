'use strict';

// checkbox filtering

const checkboxBtnContainer = document.querySelector('.search__checkbox');
const itemsContainer = document.querySelector('.items_container');
const items = document.querySelectorAll('.items');

checkboxBtnContainer.addEventListener('click', (e) => {
  const filter = e.target.dataset.filter || e.target.parentNode.dataset.filter;
  if (filter == null) {
    return;
  }
  console.log(filter);

  items.forEach((item) => {
    if (filter ==='*' || filter === item.dataset.type) {
      item.classList.remove('invisible');
    } else {
      item.classList.add('invisible');
    }
  });
});