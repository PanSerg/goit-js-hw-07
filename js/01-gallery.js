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
<img scr="${preview}" alt="${description}" width="300px">
</li>`, "");

galleryContainer.insertAdjacentHTML('beforeend', markup);
console.log(markup);

//Реализация делегирования//
galleryContainer.addEventListener("click", onClickItem);
function onClickItem(evt) {
    if (evt.target.nodeName !== 'IMG') {
        return;
    }

    console.log(evt.target);
    evt.target.classList.add('img-active');
}

//Открытие одального окна///
const openModal = () => {
    const instance = basicLightbox.create(`
	<img
    src='${preview}'
    alt="'${description}'">`);
    instance.show();
};
console.log(openModal);
console.log(basicLightbox);
