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

// toggle searchBtn
const upBtn = document.querySelector('.search__upBtn');
const searchContainer = document.querySelector('.searchBtn');
const i = document.querySelector('.fa-chevron-up')

upBtn.addEventListener('click', () => {
  searchContainer.classList.toggle('active');
  i.classList.toggle('fa-chevron-down');
  i.classList.toggle('fa-chevron-up');
});

// switch categoryBtn and themeBtn
const categoryBtn = document.querySelector('.category');
const themeBtn = document.querySelector('.theme');
const checkbox = document.querySelector('.search__checkbox');
const theme = document.querySelector('.search__theme');

themeBtn.addEventListener('click', () => {
  themeBtn.classList.add('active');
  categoryBtn.classList.remove('active');
  document.querySelector('.search__checkbox').style.display = 'none';
  document.querySelector('.search__theme').style.display = 'block';
});

categoryBtn.addEventListener('click', () => {
  categoryBtn.classList.add('active');
  themeBtn.classList.remove('active');
  document.querySelector('.search__checkbox').style.display = 'flex';
  document.querySelector('.search__theme').style.display = 'none';
});






