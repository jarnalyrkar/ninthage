class Lightbox {
  constructor() {
    this.lightbox = document.querySelector('#lightbox');
    this.currentImage = document.querySelector('#current_image');
    this.imageGallery = document.querySelector('#image_gallery');
    this.events();
  }

  events() {
    document.addEventListener('click', (ev) => {
      if (ev.target.nodeName === "IMG" && ev.target.classList.contains('imageGallery__image')) {
        this.currentImage.src = ev.target.src;
        this.lightbox.classList.add('lightbox--open');
      } else if (this.lightbox.classList.contains('lightbox--open')) {
        this.lightbox.classList.remove('lightbox--open');
      }

    });
  }
}

export default Lightbox;