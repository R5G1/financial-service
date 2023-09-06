
const btnBurger = document.querySelector('.menu__bureger');
const btnContent = document.querySelector('.navigation');
const bodyContent = document.querySelector('body');

btnBurger.addEventListener('click', () => {
    btnBurger.classList.toggle('active');
    btnContent.classList.toggle('active');
    bodyContent.classList.toggle('active');
});
