export const createElementFromHTML = (htmlString) => {
  let div = document.createElement('div');
  div.innerHTML = htmlString.trim();

  return div.firstChild;
};

export const resetFilter = () => {
  const priceFilter = $('#price').data('ionRangeSlider');
  const squareFilter = $('#square').data('ionRangeSlider');
  priceFilter.reset();
  squareFilter.reset();

  updateValue(document, 'от', '.irs-from');
  updateValue(document, 'до', '.irs-to');
};

export const updateValue = (wrapper, text, selector) => {
  const elements = wrapper.querySelectorAll(selector);

  elements.forEach(item => {
    const span = `<span class="grey-text">${text}</span>`;
    const itemText = item.innerHTML;
    item.innerHTML = `${span} <span class="text-bold middle-text">${itemText}</span>`;
  });
};

export const createFilterConfig = (price, square) => {
  let config = {};
  if(!price) {
    config['maxPrice'] = 30000000;
    config['minPrice'] = 1000000;
  } else {
    config['maxPrice'] = Number(price.to_pretty.replace(/\s+/g, ''));
    config['minPrice'] = Number(price.from_pretty.replace(/\s+/g, ''));
  }

  if(!square) {
    config['maxSquare'] = 10;
    config['minSquare'] = 300;
  } else {
    config['maxSquare'] = Number(square.to_pretty);
    config['minSquare'] = Number(square.from_pretty);
  }

  return config;
};