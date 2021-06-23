const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const labelInputElem = document.querySelector('#theme-switch-toggle');
labelInputElem.addEventListener('change', changeLabelTheme);

function changeLabelTheme(evt) {
  if (evt.target.checked) {
    document.body.classList.replace(Theme.LIGHT, Theme.DARK);
    localStorage.setItem('theme', JSON.stringify(Theme.DARK));
  } else {
    document.body.classList.replace(Theme.DARK, Theme.LIGHT);
    localStorage.setItem('theme', JSON.stringify(Theme.LIGHT));
  }
  //   const check = evt.currentTarget.checked;
  //   if (check) {
  //     document.body.classList.add(Theme.DARK);
  //     document.body.classList.remove(Theme.LIGHT);
  //   } else {
  //     document.body.classList.add(Theme.LIGHT);
  //     document.body.classList.remove(Theme.DARK);
  //   }
}
