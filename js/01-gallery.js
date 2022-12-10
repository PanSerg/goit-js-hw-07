import { galleryItems } from './gallery-items.js';
// Change code below this line
console.log(galleryItems);

const galleryContainer = document.querySelector(".gallery");
console.log(galleryContainer);

//--Создание и рендер разметки
const markup = galleryItems.reduce(
  (acc, { preview, original, description }) =>
    acc +
    `<li>
<img scr="${preview}" alt="${description}" data-source="${original}" width="300">
</li>`,"");

galleryContainer.insertAdjacentHTML('beforeend', markup);

//Реализация делегирования и открытие модального окна//
galleryContainer.addEventListener("click", onClickItem);

function onClickItem(evt) {
    if (evt.target.nodeName !== 'IMG') {
        return;
    }
      const instance = basicLightbox.create(
          `<img src="${evt.target.dataset.source}" alt="">`).show();

    console.log(evt.target);
    evt.target.classList.add('img-active');
    console.log(instance);
};
