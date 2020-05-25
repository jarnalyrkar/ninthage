class LanguageMenu {
  constructor() {
    this.languageSwitcher = document.querySelector('#desktop_language_switcher');
    this.events();
  }

  events() {
    this.languageSwitcher.addEventListener('click', (ev) => {
      ev.preventDefault();
      this.languageSwitcher.querySelector('.headerMenu__submenu').classList.toggle('headerMenu__submenu--open');
    })
  }
}

export default LanguageMenu;