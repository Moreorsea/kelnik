'use strict';

const [source, desination] = ['./source/', './build/'];

module.exports = {
  paths: {
    source: {
      root: source,
      styles: `${source}styles/`,
      scripts: `${source}js/`,
      images: {
        all: `${source}img/`,
        icons: `${source}img/icons/`,
        content: `${source}img/content/`
      },
      fonts: `${source}fonts/`,
      plugins: `${source}js/plugins/`
    },
    desination: {
      root: desination,
      styles: `${desination}css/`,
      scripts: `${desination}js/`,
      images: {
        all: `${desination}img/`,
        content: `${desination}img/content/`
      },
      fonts: `${desination}fonts/`,
      plugins: `${desination}plugins/`
    },
    dist: './dist'
  }
};
