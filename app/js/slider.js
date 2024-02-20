// Логика работы слайдера
document.addEventListener('DOMContentLoaded', function() {
  const slider = document.querySelector('.slider__wrapper');
  let isDown = false;
  let startX;
  let scrollLeft;
  // Логика переключения на смартфоне
  slider.addEventListener('touchstart', (e) => {
    isDown = true;
    slider.classList.add('active');
    startX = e.touches[0].pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
  });

  slider.addEventListener('touchmove', (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.touches[0].pageX - slider.offsetLeft;
    const walk = (x - startX) * 3;
    slider.scrollLeft = scrollLeft - walk;
  });

  slider.addEventListener('touchend', () => {
    isDown = false;
    slider.classList.remove('active');
  });
  slider.addEventListener('mousedown', (e) => {
    isDown = true;
    slider.classList.add('active');
    startX = e.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
  });
// Логика переключения мышью
  slider.addEventListener('mouseleave', () => {
    isDown = false;
    slider.classList.remove('active');
  });

  slider.addEventListener('mouseup', () => {
    isDown = false;
    slider.classList.remove('active');
  });

  slider.addEventListener('mousemove', (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - slider.offsetLeft;
    const walk = (x - startX) * 3;
    slider.scrollLeft = scrollLeft - walk;
  });

  const leftButton = document.querySelector('.slider__button-left');
  const rightButton = document.querySelector('.slider__button-right');

  leftButton.addEventListener('click', (e) => {
    e.preventDefault();
    const slideWidth = slider.querySelector('.slider__slide').offsetWidth;
    slider.scrollLeft -= slideWidth;
  });

  rightButton.addEventListener('click', (e) => {
    e.preventDefault();
    const slideWidth = slider.querySelector('.slider__slide').offsetWidth;
    slider.scrollLeft += slideWidth;
  });
});
