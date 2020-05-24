class HeaderOpacity {

  constructor() {
    this.nav = document.querySelector('.topHeader');
    this.events();
  }

  events() {
    window.addEventListener('scroll', (ev) => {
      if (window.scrollY > 10) {
        this.nav.classList.add('topHeader--hasScrolled');
      } else {
        this.nav.classList.remove('topHeader--hasScrolled');
      }
    });
  }
}

export default HeaderOpacity;
