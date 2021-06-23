import menu from '../menu.json';

import cardsElems from '../templates/cards.hbs';

const menuMarkup = cardsElems(menu);

const menuElems = document.querySelector('.js-menu');
menuElems.insertAdjacentHTML('beforeend', menuMarkup);

// function createMenu(array) {
//   const menuMarkup = array.map(arr => cardsElems(arr).join(''));
//   menuElems.insertAdjacentHTML('beforeend', menuMarkup);
// }

// createMenu(menu);
