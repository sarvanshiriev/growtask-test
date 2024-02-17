function openModal(imgElement) {
    const modal = document.getElementById('slider__modal');
    const modalImage = document.getElementById('modalImage');

    // Установка увеличенного изображения в модальное окно
    modalImage.src = imgElement.src;

    // Отображение модального окна
    modal.style.display = 'block';
     // Блокировка скроллинга
    body.classList.add('body-scroll-lock');

    // Добавляем обработчик события для закрытия модального окна при клике в пустое пространство
    modal.addEventListener('click', function (event) {
        if (event.target === modal) {
            closeModal();
        }
    });

    // Добавляем обработчик события для закрытия модального окна при нажатии на кнопку Esc
    document.addEventListener('keydown', function (event) {
        if (event.key === 'Escape') {
            closeModal();
        }
    });
}
  
  // Определение функции для закрытия модального окна
  function closeModal() {
    const modal = document.getElementById('slider__modal');
  
    // Скрытие модального окна
    modal.style.display = 'none';
    // Разблокировка скроллинга
    body.classList.remove('body-scroll-lock');

    // Удаляем обработчики событий для закрытия модального окна
     modal.removeEventListener('click', closeModal);
     document.removeEventListener('keydown', closeModal);
  }
  
  // Получаем все изображения из списка
  const images = document.querySelectorAll('.slider__slide-image');
  
  // Добавляем обработчик события клика к каждому изображению
  images.forEach((img) => {
    img.addEventListener('click', () => {
        openModal(img); // Передаем текущее изображение для увеличения
    });
  });
  
  // Получаем кнопку закрытия модального окна
const closeButton = document.querySelector('.button-close');

// Добавляем обработчик события клика к кнопке закрытия
closeButton.addEventListener('click', () => {
    closeModal();
});