// Логика открытия-закрытия модального окна для просмотра масштабированного изображения
function openModal(imgElement) {
    const modal = document.getElementById('slider__modal');
    const modalImage = document.getElementById('modalImage');
    const body = document.querySelector('body');

    modalImage.src = imgElement.src;
    modal.style.display = 'block';
    body.classList.add('body-scroll-lock');
    modal.addEventListener('click', function (event) {
        if (event.target === modal) {
            closeModal();
        }
    });

    document.addEventListener('keydown', function (event) {
        if (event.key === 'Escape') {
            closeModal();
        }
    });
}
  
  function closeModal() {
    const modal = document.getElementById('slider__modal');
    const body = document.querySelector('body');

    modal.style.display = 'none';
    body.classList.remove('body-scroll-lock');
     modal.removeEventListener('click', closeModal);
     document.removeEventListener('keydown', closeModal);
  }
  
  const images = document.querySelectorAll('.slider__slide-image');
  
  images.forEach((img) => {
    img.addEventListener('click', () => {
        openModal(img); 
    });
  });
  
const closeButton = document.querySelector('.button-close');

closeButton.addEventListener('click', () => {
    closeModal();
});