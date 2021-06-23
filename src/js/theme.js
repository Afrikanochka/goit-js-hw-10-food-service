const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const inputElem = document.querySelector('#theme-switch-toggle');
const body = document.querySelector('body');

inputElem.addEventListener('click', changeInputTheme);

function changeInputTheme(evt) {
  const check = inputElem.checked;

  if (check) {
    replaceTheme(Theme.LIGHT, Theme.DARK);
  } else {
    replaceTheme(Theme.DARK, Theme.LIGHT);
  }
}

const localTheme = localStorage.getItem('theme');

if (localTheme === Theme.DARK) {
  body.classList.add(Theme.DARK);
  inputElem.checked = true;
}

// Функция для смены темы
const replaceTheme = (oldTheme, newTheme) => {
  document.body.classList.add(newTheme);
  document.body.classList.remove(oldTheme);
  localStorage.setItem('theme', newTheme);
};
