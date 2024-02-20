// Логика скролла фотографий в блоке "Вакансия"
const slider = document.querySelector(".vacancy__wrapper");
let isMouseDown = false;
let startX;
let scrollLeft;

// Логика переключения мышью
slider.addEventListener('mousedown', (e) => {
  isMouseDown = true;
  slider.classList.add('active');
  startX = e.pageX - slider.offsetLeft;
  scrollLeft = slider.scrollLeft;
});

document.addEventListener('mouseup', () => {
  isMouseDown = false;
  slider.classList.remove('active');
});

document.addEventListener('mousemove', (e) => {
  if (!isMouseDown) return;
  e.preventDefault();
  const x = e.pageX - slider.offsetLeft;
  const walk = (x - startX) * 2;
  slider.scrollLeft = scrollLeft - walk;
});
// Добавляем обработчики для касаний
slider.addEventListener('touchstart', (e) => {
  isMouseDown = true;
  slider.classList.add('active');
  startX = e.touches[0].pageX - slider.offsetLeft;
  scrollLeft = slider.scrollLeft;
});

slider.addEventListener('touchmove', (e) => {
  if (!isMouseDown) return;
  e.preventDefault();
  const x = e.touches[0].pageX - slider.offsetLeft;
  const walk = (x - startX) * 2;
  slider.scrollLeft = scrollLeft - walk;
});

slider.addEventListener('touchend', () => {
  isMouseDown = false;
  slider.classList.remove('active');
});