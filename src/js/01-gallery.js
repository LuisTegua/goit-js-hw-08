// Add imports above this line
import { galleryItems } from './gallery-items';
import simpleLightbox from 'simplelightbox';
import "simplelightbox/dist/simple-lightbox.min.css";
// Change code below this line

const gallery = document.querySelector('.gallery');
addImg(galleryItems);

let lightbox = new simpleLightbox('.gallery a', {
  captionsData: "alt",
  captionsDelay: 250,
});

function addImg(galleryItems) {
  let imgs = "";
  galleryItems.forEach(item => {
    imgs += `<li class="gallery__item">
      <a class="gallery__link" href="${item.original}">
        <img class="gallery__image" src="${item.preview}" alt="${item.description}" />
      </a>
    </li>`;
  });
  gallery.innerHTML = imgs;
}

gallery.addEventListener("click", (event) => {
  event.preventDefault();
});