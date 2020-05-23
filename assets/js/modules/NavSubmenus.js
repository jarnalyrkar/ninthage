class NavSubmenus {
  constructor() {
    this.menu = document.querySelector('.headerMenu');
    this.events();
  }

  events() {
    this.menu.addEventListener('click', (ev) => {
      if (ev.target.parentElement.classList.contains('hasChildren')) {
        ev.target.parentElement.classList.toggle('headerMenu__submenu--open');
      }
    })
  }
}

export default NavSubmenus;