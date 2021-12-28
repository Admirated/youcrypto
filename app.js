window.addEventListener('DOMContentLoaded', () => {
   //menu
   const burger = document.querySelector('.menu__icon'),
      menu = document.querySelector('.menu'),
      menuClose = document.querySelector('.menu__close'),
      overflow = document.querySelector('.overflow');

   burger.addEventListener('click', () => addActiveClass(menu, overflow));
   menuClose.addEventListener('click', () => removeActiveClass(menu, overflow));
   overflow.addEventListener('click', () => removeActiveClass(menu, overflow));

   //selector
   const selectorItems = document.querySelectorAll('.selector__item');

   selectorItems.forEach(item => {
      item.addEventListener('click', () => {
         removeActiveClass(...selectorItems);
         addActiveClass(item);
      });
   });

   //datatable 
   $('#promotedTokens').DataTable({
      "columnDefs": [{
         targets: 'no-sort',
         orderable: false
      }],
      "language": {
         "paginate": {
            "previous": '<svg width="7" height="10" viewBox="0 0 7 10" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M6.18129 0.285144C5.88524 -0.010901 5.40526 -0.010901 5.10921 0.285144L1.06616 4.32819C0.77012 4.62424 0.77012 5.10422 1.06616 5.40027L5.10921 9.44331C5.40526 9.73936 5.88524 9.73936 6.18129 9.44331C6.47733 9.14727 6.47733 8.66728 6.18129 8.37124L2.67428 4.86423L6.18129 1.35722C6.47733 1.06117 6.47733 0.581189 6.18129 0.285144Z" fill="#009ADC" fill-opacity="1"/></svg>',
            "next": '<svg width="7" height="10" viewBox="0 0 7 10" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M1.06578 9.44325C1.36183 9.73929 1.84181 9.73929 2.13786 9.44325L6.18091 5.4002C6.47695 5.10416 6.47695 4.62417 6.18091 4.32813L2.13786 0.285082C1.84181 -0.0109636 1.36183 -0.0109636 1.06578 0.285082C0.769739 0.581126 0.769739 1.06111 1.06578 1.35716L4.57279 4.86417L1.06578 8.37117C0.769739 8.66722 0.769739 9.1472 1.06578 9.44325Z" fill="#009ADC" fill-opacity="1"/></svg>'
         }
      }
   });

   function removeActiveClass(...elements) {
      elements.forEach(el => el.classList.remove('_active'));
   }

   function addActiveClass(...elements) {
      elements.forEach(el => el.classList.add('_active'));
   }
});