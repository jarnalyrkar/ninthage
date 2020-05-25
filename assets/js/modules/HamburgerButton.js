class HamburgerButton {

  constructor() {
    this.hamburger = document.querySelector('#hamburger');
    this.nav = document.querySelector('.headerMenu');
    this.events();
  }

  events() {
    this.hamburger.addEventListener('click', (ev) => {
      this.nav.classList.toggle('headerMenu--open');
      this.hamburger.classList.toggle('hamburger--toggled');
      document.body.classList.toggle('disableScroll');
      this.closeOpenMenus();
    });
  }
  closeOpenMenus() {
    this.menuItems = document.querySelectorAll('.headerMenu__list .headerMenu__item');

    this.menuItems.forEach(item => {
      if (item.classList.contains('menu-item-has-children--open')) {
        item.classList.remove('menu-item-has-children--open');
        item.querySelector('.headerMenu__submenu--open').classList.remove('headerMenu__submenu--open');
      }
    })
  }
}

export default HamburgerButton;


