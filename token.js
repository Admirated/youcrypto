window.addEventListener('DOMContentLoaded', () => {
   const copyBtn = document.querySelector('.copy__btn');

   copyBtn.addEventListener('click', () => {
      const address = document.querySelector('.token__info-contract-wrapper p').textContent;
      setClipboard(address);
   });

   function setClipboard(text) {
      var type = "text/plain";
      var blob = new Blob([text], {
         type
      });
      var data = [new ClipboardItem({
         [type]: blob
      })];

      navigator.clipboard.write(data).then(
         function () {
            copyBtn.querySelector('svg path').style.fill = "#00e23f";
            setTimeout(() => {
               copyBtn.querySelector('svg path').style.fill = "#ffb800";
            }, 2000);
         },
         function () {
            copyBtn.querySelector('svg path').style.fill = "#e61b1b";
            setTimeout(() => {
               copyBtn.querySelector('svg path').style.fill = "#ffb800";
            }, 2000);
         }
      );
   }
});