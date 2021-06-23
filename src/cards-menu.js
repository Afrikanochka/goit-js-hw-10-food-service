import menu from './menu.json';

import cardsElems from './cards.hbs';

const menuMarkup = cardsElems(menu);

const menuElems = document.querySelector('.js-menu');
menuElems.insertAdjacentHTML('beforeend', menuMarkup);