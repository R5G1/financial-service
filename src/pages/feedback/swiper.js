
import Swiper from 'swiper';
import 'swiper/css';
import { Navigation, Pagination } from 'swiper/modules';

Swiper.use([Navigation, Pagination]);
document.addEventListener('DOMContentLoaded', () => {
  const swiper = new Swiper('.swiper', {

    breakpoints: {
      1200: {
        slidesPerView: 3,
      },
      992: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 2,
      },
      420: {
        slidesPerView: 1,
      },
    },

    pagination: {
      el: '.swiper-pagination',
      type: 'fraction',
    },

    navigation: {
      nextEl: '.feedback__btn-r',
      prevEl: '.feedback__btn-l',
    },
  });
});
