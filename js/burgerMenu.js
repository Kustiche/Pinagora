const burgerBtn = document.querySelector('.burger');
const burgerNav = document.querySelector('.burger-nav');
const body = document.querySelector('body');
const navLinks = document.querySelectorAll('.burger-nav__link');

burgerBtn.addEventListener('click', () => {
  burgerBtn.classList.toggle('open');
  burgerNav.classList.toggle('open');
  body.classList.toggle('no-scroll');
});

navLinks.forEach((link) => {
  link.addEventListener('click', () => {
    burgerBtn.classList.remove('open');
    burgerNav.classList.remove('open');
    body.classList.remove('no-scroll');
  });
});
