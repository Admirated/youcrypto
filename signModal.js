import {
   addActiveClass,
   removeActiveClass
} from './modules/classHelpers.js';

window.addEventListener('DOMContentLoaded', () => {
   //sign modals
   const signModal = document.querySelector('.sign'),
      signToggers = signModal.querySelectorAll('.sign__changer div'),
      signInForm = signModal.querySelector('#signIn'),
      signUpForm = signModal.querySelector('#signUp');

   signToggers.forEach(toggler => {
      toggler.addEventListener('click', () => {
         removeActiveClass(...signToggers);
         addActiveClass(toggler);
         if (toggler.classList.contains('sign__in')) {
            signUpForm.classList.add('hide');
            signInForm.classList.remove('hide');
         } else {
            signUpForm.classList.remove('hide');
            signInForm.classList.add('hide');
         }
      });
   });
});