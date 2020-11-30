'use strict';


let btnOpenModal = document.querySelectorAll('.show-modal');  
//will need to create a loop in order to be able to select all the buttons

const modal = document.querySelector('.modal');
const hidden = document.querySelector('.hidden');  
const btnCloseModal = document.querySelector('.close-modal');
const overlay = document.querySelector('.overlay');

const openModal = function() {
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
};

const closemodal = function () {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
};

const escape = function (e) {
    if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
            //refactor with a function
            closemodal();

    } ;     
};

for (let i = 0; i < btnOpenModal.length; i++) {

    btnOpenModal[i].addEventListener( 'click',  openModal );

    btnCloseModal.addEventListener( 'click', closemodal );

    overlay.addEventListener( 'click', closemodal );

    document.addEventListener( 'keyup', escape );

    console.log(btnOpenModal[i].textContent);
}









