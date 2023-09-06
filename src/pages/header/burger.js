/* eslint-disable linebreak-style */
/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-use-before-define */
/* eslint-disable consistent-return */

const btnBurger = document.querySelector('.menu__bureger');
const btnContent = document.querySelector('.navigation');
const bodyContent = document.querySelector('body');

btnBurger.addEventListener('click', () => {
    btnBurger.classList.toggle('active');
    btnContent.classList.toggle('active');
    bodyContent.classList.toggle('active');
});
