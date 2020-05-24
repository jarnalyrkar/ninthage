class HeaderOpacity {

  constructor() {
    this.nav = document.querySelector('.topHeader');
    this.events();
  }

  events() {
    window.addEventListener('scroll', (ev) => {
      if (window.scrollY > 10) {
        this.nav.style.backgroundColor = "rgba(0,0,0,0.75)";
      } else {
        this.nav.style.backgroundColor = "rgba(0,0,0,0)";
      }

    });
  }
}

export default HeaderOpacity;
