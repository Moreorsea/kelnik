import { initResults } from './results';

export const initFilter = () => {
  const roomCountFilters = document.querySelectorAll('.room-list__item');
  roomCountFilters.forEach(item => {
    item.addEventListener('click', (e) => {
      clearFilter(roomCountFilters);
      item.classList.add('room-list__item--selected');
      initResults(e.target.id);
    });
  });
};

function clearFilter(list) {
  list.forEach(item => {
    item.classList.remove('room-list__item--selected');
  });
};

