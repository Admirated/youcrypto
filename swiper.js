import Swiper from 'https://unpkg.com/swiper@7/swiper-bundle.esm.browser.min.js';

new Swiper('.banners__slider', {
   slidesPerView: 2,
   touchRatio: 1,
   loop: true,
   slidesPerGroup: 1,
   grabCursor: true,
   breakpoints: {
      991: {
         slidesPerView: 3,

      }
   },
   autoplay: {
      delay: 2000,
      disableOnInteraction: false
   },
});