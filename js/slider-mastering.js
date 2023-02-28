let positionMast = 0;
const slidesToShowMast = 5;
const slidesToScrollMast = 1;
const containerMast =  document.querySelector('.mastering-slider__container');
const trackMast =  document.querySelector('.mastering-slider__track');
const itemMast =  document.querySelector('.mastering-slider__item');
const btnPrevMast = document.querySelector('.mstr-btn__prev');
const btnNextMast = document.querySelector('.mstr-btn__next');
const itemsMast = document.querySelectorAll('.mastering-slider__item');
const itemsCountMast = itemsMast.length;
const itemWidthMast = containerMast.clientWidth / slidesToShowMast;
const movePositionMast = slidesToScrollMast * itemWidthMast

itemsMast.forEach((itemMast) => {
    itemMast.style.minWidth = `${itemWidthMast}px`;
})

btnPrevMast.addEventListener('click', () => {
    const itemsLeft = Math.abs(positionMast) / itemWidthMast;

    positionMast += itemsLeft >= slidesToScrollMast ? movePositionMast : itemsLeft * itemWidthMast;

    setPositionMast();
    checkBtnsMast();
});

btnNextMast.addEventListener('click', () => {
    const itemsLeft = itemsCountMast - ((Math.abs(positionMast) + (slidesToShowMast * itemWidthMast)) / itemWidthMast);

    positionMast -= itemsLeft >= slidesToScrollMast ? movePositionMast : itemsLeft * itemWidthMast;

    setPositionMast();
    checkBtnsMast();
});

const setPositionMast = () => {
    trackMast.style.transform = `translateX(${positionMast}px)`
};

const checkBtnsMast = () => {
    btnPrevMast.disabled = positionMast === 0;
    btnNextMast.disabled = positionMast <= -(itemsCountMast - slidesToShowMast) * itemWidthMast;
};

checkBtnsMast();