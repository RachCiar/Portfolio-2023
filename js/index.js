'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const rightColumn = document.querySelector('.right-column');
  const container = document.querySelector('.container');
  const image = document.querySelector('.image');
  const nameWrapper = document.querySelector('.name-wrapper');
  const intro = document.querySelector('.intro');
  const footer = document.querySelector('footer');

  console.log('DomContentLoaded');

  setTimeout(() => {
    container.classList.add('expand-from-center');
    container.style.opacity = 1;
  }, 0);

  setTimeout(() => {
    rightColumn.classList.add('slide-in-right');
    rightColumn.style.opacity = 1;
  }, 1000);

  setTimeout(() => {
    image.classList.add('slide-in-left');
    image.style.opacity = 1;
    nameWrapper.classList.add('slide-in-left');
    nameWrapper.style.opacity = 1;
  }, 2000);

  setTimeout(() => {
    container.style.background =
      "linear-gradient(to left, rgba(255, 255, 255, 0), rgba(255, 255, 255, 1)), url('images/backgroundImage.jpg')";
    container.style.opacity = 1;
  }, 2500);

  setTimeout(() => {
    intro.classList.add('slide-up-from-bottom');
    intro.style.opacity = 1;
    footer.classList.add('slide-up-from-bottom');
    footer.style.opacity = 1;
  }, 3000);
});
