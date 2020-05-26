class Accordion {
  constructor() {
    this.accordions = document.querySelectorAll('.accordion');
    this.events();
  }
  events() {
    if (this.accordions) {
      this.accordions.forEach(accordion => {
        accordion.addEventListener('click', (ev) => {
          if (ev.target.classList.contains('accordion__title')) {
            ev.target.classList.toggle('accordion__title--open');
          }
        });
      })
    }
  }
}

export default Accordion;