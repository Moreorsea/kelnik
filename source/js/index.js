import { initRangePlugin } from './range';
import { initFilter } from './filter';
import { initResults } from './results';
import { initScollTo } from './scrollTo';
import { initClearFilter } from './clearFilter';

document.addEventListener('DOMContentLoaded', function() {
  initRangePlugin();
  initFilter();
  initResults('3%D0%BA');
  initScollTo();
  initClearFilter();
});

