/* eslint-disable linebreak-style */
/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-use-before-define */
/* eslint-disable consistent-return */

const btnBurger = document.querySelector('.menu__bureger');
btnBurger.addEventListener('click', () => {
    btnBurger.classList.toggle('active');
});
