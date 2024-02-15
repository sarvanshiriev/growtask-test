let burgerList = document.querySelector('.header__navigation');
let toggle = document.querySelector('.header__toggle');
let logo = document.querySelector('.header__logo');
let menu = document.querySelector('.header__menu');

toggle.addEventListener('click', () => {
  burgerList.classList.toggle('header__navigation--opened');
  burgerList.classList.toggle('header__navigation--closed');
  toggle.classList.toggle('header__toggle--opened');
  toggle.classList.toggle('header__toggle--closed');
  logo.classList.toggle('header__logo--opened');
  logo.classList.toggle('header__logo--closed');
  menu.classList.toggle('header__menu--opened');
  menu.classList.toggle('header__menu--closed');
});
