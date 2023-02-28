let btnBpm = document.querySelector('.bpm-nav__btn');
let menuBpm = document.querySelector('.bpm__menu');
// let string = document.querySelector('.beats-radio__block');
// let label = document.querySelector('.beats-radio__label');
// let input = document.querySelector('.beats-radio__input');
let catalizatorBpm = document.querySelector('.beats-head__block6');

btnBpm.addEventListener('click', () => {
    catalizatorBpm.classList.toggle('is-active');
    menuBpm.classList.toggle('is-active');
});

// label.addEventListener('click', () => {
//     string.classList.toggle('is-checked');
// });

// input.addEventListener('click', () => {
//     string.classList.toggle('is-checked');
// });