document.addEventListener("DOMContentLoaded", function() {
    const buttons = document.querySelectorAll(".picture__buttons-link"); // Получаем все кнопки
    const images = document.querySelectorAll(".picture__item"); // Получаем все элементы с картинками

    buttons.forEach(function(button, index) { // Для каждой кнопки
        button.addEventListener("click", function(event) { // Навешиваем обработчик клика
            event.preventDefault(); // Предотвращаем переход по ссылке

            // Удаляем класс активной кнопки у всех кнопок
            buttons.forEach(function(btn) {
                btn.classList.remove("button-active");
            });

            // Добавляем класс активной кнопки текущей кнопке
            button.classList.add("button-active");

            // Показываем только соответствующую картинку
            images.forEach(function(image) {
                image.classList.remove("active"); // Сначала скрываем все картинки
            });
            images[index].classList.add("active"); // Показываем только выбранную картинку
        });
    });
});