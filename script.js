'use strict';

const modal = document.querySelector('.modal');
const btnCloseModal = document.querySelector('.close-modal');
const overlay = document.querySelector('.overlay');

const btnsShowModal = document.querySelectorAll('.show-modal');
console.log(btnsShowModal);

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

const showModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

for (let i = 0; i < btnsShowModal.length; i++) {
  btnsShowModal[i].addEventListener('click', showModal);
}

btnCloseModal.addEventListener('click', closeModal);

overlay.addEventListener('click', closeModal);
