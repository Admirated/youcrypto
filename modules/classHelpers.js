function removeActiveClass(...elements) {
   elements.forEach(el => el.classList.remove('_active'));
}

function removeActiveClassForClosest(selector, ...elements) {
   elements.forEach(el => el.closest(selector).classList.remove('_active'));
}

function addActiveClassForClosest(selector, ...elements) {
   elements.forEach(el => el.closest(selector).classList.remove('_active'));
}

function addActiveClass(...elements) {
   elements.forEach(el => el.classList.add('_active'));
}

export {
   addActiveClass,
   removeActiveClass,
   removeActiveClassForClosest,
   addActiveClassForClosest
};