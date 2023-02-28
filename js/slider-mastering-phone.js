let positionMastphone = 0;
const slidesToShowMastphone = 2;
const slidesToScrollMastphone = 1;
const containerMastphone =  document.querySelector('.mastering-slider__container-phone');
const trackMastphone =  document.querySelector('.mastering-slider__track-phone');
const itemMastphone =  document.querySelector('.mastering-slider__item-phone');
const btnPrevMastphone = document.querySelector('.mstr-btn__prev-phone');
const btnNextMastphone = document.querySelector('.mstr-btn__next-phone');
const itemsMastphone = document.querySelectorAll('.mastering-slider__item-phone');
const itemsCountMastphone = itemsMastphone.length;
const itemWidthMastphone = containerMastphone.clientWidth / slidesToShowMastphone;
const movePositionMastphone = slidesToScrollMastphone * itemWidthMastphone

itemsMastphone.forEach((itemMastphone) => {
    itemMastphone.style.minWidth = `${itemWidthMastphone}px`;
})

btnPrevMastphone.addEventListener('click', () => {
    const itemsLeft = Math.abs(positionMastphone) / itemWidthMastphone;

    positionMastphone += itemsLeft >= slidesToScrollMastphone ? movePositionMastphone : itemsLeft * itemWidthMastphone;

    setPositionMastphone();
    checkBtnsMastphone();
});

btnNextMastphone.addEventListener('click', () => {
    const itemsLeft = itemsCountMastphone - ((Math.abs(positionMastphone) + (slidesToShowMastphone * itemWidthMastphone)) / itemWidthMastphone);

    positionMastphone -= itemsLeft >= slidesToScrollMastphone ? movePositionMastphone : itemsLeft * itemWidthMastphone;

    setPositionMastphone();
    checkBtnsMastphone();
});

const setPositionMastphone = () => {
    trackMastphone.style.transform = `translateX(${positionMastphone}px)`
};

const checkBtnsMastphone = () => {
    btnPrevMastphone.disabled = positionMastphone === 0;
    btnNextMastphone.disabled = positionMastphone <= -(itemsCountMastphone - slidesToShowMastphone) * itemWidthMastphone;
};

checkBtnsMastphone();