import { galleryItems } from './gallery-items.js';
// Change code below this line
console.log(galleryItems);

const galleryContainer = document.querySelector(".gallery");
console.log(galleryContainer);

//--Создание и рендер разметки
const markup = galleryItems.reduce(
  (acc, { preview, original, description }) => {
    return (
      acc +
      `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img loading="lazy" class="gallery__image"
src="${preview}" alt="${description}" data-source="${original}"
/>
  </a>
  </div>`
    ); 
}, '');

galleryContainer.insertAdjacentHTML('beforeend', markup);

//Реализация делегирования и открытие модального окна//
galleryContainer.addEventListener("click", onClickItem);

function onClickItem(evt) {
  evt.preventDefault();
    if (evt.target.nodeName !== 'IMG') {
        return;
    }
      const instance = basicLightbox.create(
          `<img src="${evt.target.dataset.source}" alt="">`).show();

    console.log(evt.target);
    evt.target.classList.add('img-active');
    console.log(instance);
};


