const formInputs = document.querySelectorAll('.form__item-input');

formInputs.forEach(input => {
  input.addEventListener('focus', function(event) {
    event.target.classList.add('form__item-input-active');
  });

  input.addEventListener('input', function(event) {
    if (event.target.value.trim() === '') {
      event.target.classList.remove('form__item-input-active');
    } else {
      event.target.classList.add('form__item-input-active');
    }
  });
});

function validateForm() {
    let inputs = document.querySelectorAll('.form__item-input');
    let isValid = true;

    inputs.forEach(input => {
        if (input.value.trim() === '' && input.getAttribute('placeholder').includes('*')) {
            input.classList.add('error');
            isValid = false;
        } else {
            input.classList.remove('error');
        }
    });

    return isValid;
}

document.querySelector('.form__button').addEventListener('click', function(event) {
    event.preventDefault();
    validateForm();
});
document.addEventListener('click', function(event) {
    if (!event.target.closest('.form__wrapper')) {
        document.querySelectorAll('.form__item-input').forEach(input => {
            input.classList.remove('error');
        });
    }
});