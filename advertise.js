import {
   addActiveClass,
   removeActiveClassForClosest
} from './modules/classHelpers.js';

window.addEventListener('DOMContentLoaded', () => {
   const fileInput = document.querySelector('#bannerImage');

   fileInput.addEventListener('change', () => {
      fileInput.style.color = '#ffb800';
   });

   const radioBtns = document.querySelectorAll('input[name="placement"]'),
      placementWrappers = document.querySelectorAll('.advertise__placement-wrapper');

   radioBtns.forEach((btn, i) => {
      btn.addEventListener('change', () => {
         removeActiveClassForClosest('.advertise__placement-wrapper', ...placementWrappers);
         addActiveClass(placementWrappers[i]);
      });
   });
});