let positionMastTablet = 0;
const slidesToShowMastTablet = 4;
const slidesToScrollMastTablet = 1;
const containerMastTablet =  document.querySelector('.mastering-slider__container-tablet');
const trackMastTablet =  document.querySelector('.mastering-slider__track-tablet');
const itemMastTablet =  document.querySelector('.mastering-slider__item-tablet');
const btnPrevMastTablet = document.querySelector('.mstr-btn__prev-tablet');
const btnNextMastTablet = document.querySelector('.mstr-btn__next-tablet');
const itemsMastTablet = document.querySelectorAll('.mastering-slider__item-tablet');
const itemsCountMastTablet = itemsMastTablet.length;
const itemWidthMastTablet = containerMastTablet.clientWidth / slidesToShowMastTablet;
const movePositionMastTablet = slidesToScrollMastTablet * itemWidthMastTablet

itemsMastTablet.forEach((itemMastTablet) => {
    itemMastTablet.style.minWidth = `${itemWidthMastTablet}px`;
})

btnPrevMastTablet.addEventListener('click', () => {
    const itemsLeft = Math.abs(positionMastTablet) / itemWidthMastTablet;

    positionMastTablet += itemsLeft >= slidesToScrollMastTablet ? movePositionMastTablet : itemsLeft * itemWidthMastTablet;

    setPositionMastTablet();
    checkBtnsMastTablet();
});

btnNextMastTablet.addEventListener('click', () => {
    const itemsLeft = itemsCountMastTablet - ((Math.abs(positionMastTablet) + (slidesToShowMastTablet * itemWidthMastTablet)) / itemWidthMastTablet);

    positionMastTablet -= itemsLeft >= slidesToScrollMastTablet ? movePositionMastTablet : itemsLeft * itemWidthMastTablet;

    setPositionMastTablet();
    checkBtnsMastTablet();
});

const setPositionMastTablet = () => {
    trackMastTablet.style.transform = `translateX(${positionMastTablet}px)`
};

const checkBtnsMastTablet = () => {
    btnPrevMastTablet.disabled = positionMastTablet === 0;
    btnNextMastTablet.disabled = positionMastTablet <= -(itemsCountMastTablet - slidesToShowMastTablet) * itemWidthMastTablet;
};

checkBtnsMastTablet();