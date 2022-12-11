import { galleryItems } from "./gallery-items.js";
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
  <a class="gallery__item" href="${original}">
    <img class="gallery__image"
src="${preview}" alt="${description}" data-source="${original}"
/>
  </a>
  </div>`
    );
  },
  ""
);

galleryContainer.insertAdjacentHTML("beforeend", markup);

//..добавление подписи картинке//
const lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionsPosition: "bottom",
  captionsDelay: 250,
});
console.log(lightbox);
