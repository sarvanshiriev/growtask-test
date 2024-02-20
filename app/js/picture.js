// Логика переключения картинок
document.addEventListener("DOMContentLoaded", function() {
    const buttons = document.querySelectorAll(".picture__buttons-link"); 
    const images = document.querySelectorAll(".picture__item"); 

    buttons.forEach(function(button, index) { 
        button.addEventListener("click", function(event) { 
            event.preventDefault();

            
            buttons.forEach(function(btn) {
                btn.classList.remove("button-active");
            });

            
            button.classList.add("button-active");

          
            images.forEach(function(image) {
                image.classList.remove("picture-active");
            });
            images[index].classList.add("picture-active");
        });
    });
});