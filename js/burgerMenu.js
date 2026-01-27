const burgerBtn = document.querySelector('.burger');
const burgerNav = document.querySelector('.burger-nav');
const body = document.querySelector('body');

burgerBtn.addEventListener('click', () => {
  burgerBtn.classList.toggle('open');
  burgerNav.classList.toggle('open');
  body.classList.toggle('no-scroll');
});
