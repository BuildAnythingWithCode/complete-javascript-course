'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');

// btnsOpenModal.addEventListener('click', function () {
//   modal.classList.remove('hidden');
//   overlay.classList.remove('hidden');
// });

const open = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const hide = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

for (let i = 0; i < btnsOpenModal.length; i++) {
  btnsOpenModal[i].addEventListener('click', open);
}

btnCloseModal.addEventListener('click', hide);
overlay.addEventListener('click', hide);

document.addEventListener('keydown', function (event) {
  if (!modal.classList.contains('hidden') && event.key === 'Escape') hide();
});
