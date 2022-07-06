import axios from 'axios';
import { createElementFromHTML, resetFilter, createFilterConfig } from './utils';

const tmpl = require('blueimp-tmpl')
tmpl.regexp = /([\s'\\])(?!(?:[^[]|\[(?!%))*%\])|(?:\[%(=|#)([\s\S]+?)%\])|(\[%)|(%\])/g

let allCards = [];
let filteredCards = [];

export const loader = document.querySelector('.lds-ring');
export const filter = document.querySelector('.filter');

export const initResults = (roomCount) => {
  inactiveApp(filter, loader);

  let roomList = []; 
  const showMore = document.querySelector('.show-more');
  showMore.classList.add('hidden');
  showMore.removeEventListener('click', initShowMore);

  const wrapper = document.querySelector('.results-list');
  wrapper.innerHTML = '';

  axios.get(`https://dselyanina.pythonanywhere.com/api/flat-list/?count_room=${roomCount}&format=json`)
    .then(res => {
      resetFilter();
      allCards = res.data.results;
      filteredCards = res.data.results;
      localStorage.setItem('allCards', JSON.stringify(allCards));
      localStorage.setItem('filteredCards', JSON.stringify(filteredCards));
      showMore.addEventListener('click', initShowMore);
  
      roomList = allCards.splice(0, 5);
      setTimeout(() => {
        if(allCards.length > 5) {
          showMore.classList.remove('hidden');
        }
        renderList(wrapper, roomList);
        activateApp(filter, loader);
      }, 2000);
    });
};

export const inactiveApp = (filter, loader) => {
  filter.classList.add('filter--disabled');
  loader.classList.remove('hidden');
};

export const activateApp = (filter, loader) => {
  filter.classList.remove('filter--disabled');
  loader.classList.add('hidden');
};

export const renderList = (wrapper, list) => {
  const fragment = document.createDocumentFragment();
  list.forEach(element => {
    const wrapElements = createElementFromHTML(tmpl('result-card', element));
    fragment.append(wrapElements);
  });
  wrapper.append(fragment);
};

export const initShowMore = () => {
  const filteredCards = JSON.parse(localStorage.getItem('filteredCards'));
  const blocks = document.querySelectorAll('.block');
  const wrapper = document.querySelector('.results-list');
  const showMore = document.querySelector('.show-more');
  
  let roomList = filteredCards.splice(blocks.length, 5);

  renderList(wrapper, roomList);
  if(filteredCards.length === blocks.length) {
    showMore.classList.add('hidden');
  }
};

export const getDataFiltered = () => {
  const wrapper = document.querySelector('.results-list');
  const price = JSON.parse(localStorage.getItem('price'));
  const square = JSON.parse(localStorage.getItem('square'));
  const showMore = document.querySelector('.show-more');

  const { minPrice, maxPrice, minSquare, maxSquare } = createFilterConfig(price, square);
  let items = JSON.parse(localStorage.getItem('allCards'));

  wrapper.innerHTML = '';

  let arr = items.filter(item => 
    (minPrice <= item.price && item.price <= maxPrice) && (minSquare <= item.square && item.square <= maxSquare)
  );
  
  arr.length > 5 ? showMore.classList.remove('hidden') : showMore.classList.add('hidden');
  localStorage.setItem('filteredCards', JSON.stringify(arr));
  renderList(wrapper, arr.splice(0, 5));
};
