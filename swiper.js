import Swiper from 'https://unpkg.com/swiper@7/swiper-bundle.esm.browser.min.js';

new Swiper('.banners__slider', {
   slidesPerView: 1,
   touchRatio: 1,
   loop: true,
   slidesPerGroup: 1,
   grabCursor: true,
   breakpoints: {
      576: {
         slidesPerView: 2,

      },
      991: {
         slidesPerView: 3,

      }
   },
   autoplay: {
      delay: 2000
   },
});