import gallery from './gallery-items.js';

const galleryContainer = document.querySelector('.js-gallery');

const lightboxImage = document.querySelector('.lightbox__image');

const lightboxAddIsopen = document.querySelector('.js-lightbox');

const btnClose = document.querySelector('.lightbox__button');

btnClose.addEventListener('click', onBtnClick);

const imgMark = imgMarkup(gallery);

galleryContainer.insertAdjacentHTML('beforeend', imgMark);

galleryContainer.addEventListener('click', onImageClick);

function imgMarkup(gallery) {
  return gallery
    .map(({ preview, description }) => {
      return `<li class="gallery__item">
        <a class="gallery__link" href="">
          <img class="gallery__image" src="${preview}" alt="${description}" />
        </a>
      </li>`;
    })
    .join('');
}

function onImageClick(evt) {
  evt.preventDefault();
  if (!evt.target.classList.contains('gallery__image')) {
    return;
  }
  lightboxAddIsopen.classList.add('is-open');

  gallery.map(({ description, original }) => {
    if (evt.target.alt === description) {
      lightboxImage.src = `${original}`;
    }
  });
}

function onBtnClick(evt) {
  lightboxAddIsopen.classList.remove('is-open');
  lightboxImage.src = '';
}
