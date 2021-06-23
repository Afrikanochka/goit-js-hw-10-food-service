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
    document.body.classList.add(Theme.DARK);
    document.body.classList.remove(Theme.LIGHT);
    localStorage.setItem('theme', Theme.DARK);
  } else {
    document.body.classList.add(Theme.LIGHT);
    document.body.classList.remove(Theme.DARK);
    localStorage.removeItem('theme');
    localStorage.setItem('theme', Theme.LIGHT);
  }
}

const localTheme = localStorage.getItem('theme');

if (localTheme === Theme.DARK) {
  body.classList.add(Theme.DARK);
  inputElem.checked = true;
}
