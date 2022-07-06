import { getDataFiltered, inactiveApp, activateApp, filter, loader } from './results';
import { updateValue } from './utils';

const wrapper = document.querySelector('.results-list');
export let priceSettings = {};
export let squareSettings = {};

export const initRangePlugin = () => {
  $('#price').ionRangeSlider({
    type: 'double',
    grid: true,
    min: 1000000,
    max: 30000000,
    from: 1000000,
    to: 15000000,
    step: 250,
    onChange: function(data) {
      const price = document.querySelector('.price');
      localStorage.setItem('price', JSON.stringify(data));

      wrapper.innerHTML = '';
      inactiveApp(filter, loader);

      updateValue(price, 'от', '.irs-from');
      updateValue(price, 'до', '.irs-to');
      setTimeout(() => {
        getDataFiltered();
        activateApp(filter, loader)
      }, 2000)
    }
  });

  $('#square').ionRangeSlider({
    type: 'double',
    grid: true,
    min: 10,
    max: 300,
    from: 10,
    to: 123,
    step: 5,
    onChange: function(data) {
      const square = document.querySelector('.square');
      localStorage.setItem('square', JSON.stringify(data));

      wrapper.innerHTML = '';
      inactiveApp(filter, loader);

      // getDataSquare(data);
      updateValue(square, 'от', '.irs-from');
      updateValue(square, 'до', '.irs-to');
      setTimeout(() => {
        getDataFiltered(data);
        activateApp(filter, loader)
      }, 2000)
    }
  });

  updateValue(document, 'от', '.irs-from');
  updateValue(document, 'до', '.irs-to');
}
