window.addEventListener('DOMContentLoaded', () => {
   //menu
   const burger = document.querySelector('.menu__icon'),
         menu = document.querySelector('.menu'),
         menuClose = document.querySelector('.menu__close'),
         overflow = document.querySelector('.overflow');

   burger.addEventListener('click', () => {
      menu.classList.add('_active');
      overflow.classList.add('_active');
   });
   menuClose.addEventListener('click', () => {
      menu.classList.remove('_active');
      overflow.classList.remove('_active');
   });
   overflow.addEventListener('click', () => {
      menu.classList.remove('_active');
      overflow.classList.remove('_active');
   });
});