class NavSubmenus {
  constructor() {
    this.menu = document.querySelector('.headerMenu');
    this.events();
  }

  events() {
    this.menu.addEventListener('click', (ev) => {
      if (ev.target.parentElement.classList.contains('menu-item-has-children')) {
        ev.target.parentElement.classList.toggle('menu-item-has-children--open');
        ev.target.parentElement.querySelector('.headerMenu__submenu').classList.toggle('headerMenu__submenu--open');
      }
    });
  }
}

export default NavSubmenus;