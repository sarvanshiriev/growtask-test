// Логика скролла вверх при нажатии на лого
document.addEventListener('DOMContentLoaded', function() {
    var logo = document.getElementById('logo');
    logo.addEventListener('click', function(event) {
        event.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});