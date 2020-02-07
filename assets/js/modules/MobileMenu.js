class MobileMenu {

  constructor() {
    this.hamburger = document.getElementById('hamburger')
    this.menu = document.querySelector('.c-main-header__nav-list')
    this.events();
  }

  events() {
    this.hamburger.addEventListener('click', (ev) => {
      this.menu.classList.toggle('open');
      this.hamburger.classList.toggle('open');
    });
  }
}

export default MobileMenu;


