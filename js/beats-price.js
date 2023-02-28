let btnPrice = document.querySelector('.price-nav__btn');
let menuPrice = document.querySelector('.price__menu')
let catalizatorPrice = document.querySelector('.beats-head__block4');

btnPrice.addEventListener('click', () => {
    catalizatorPrice.classList.toggle('is-active');
    menuPrice.classList.toggle('is-active');
});