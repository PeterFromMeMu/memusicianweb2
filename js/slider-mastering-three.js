let positionMastthree = 0;
const slidesToShowMastthree = 3;
const slidesToScrollMastthree = 1;
const containerMastthree =  document.querySelector('.mastering-slider__container-three');
const trackMastthree =  document.querySelector('.mastering-slider__track-three');
const itemMastthree =  document.querySelector('.mastering-slider__item-three');
const btnPrevMastthree = document.querySelector('.mstr-btn__prev-three');
const btnNextMastthree = document.querySelector('.mstr-btn__next-three');
const itemsMastthree = document.querySelectorAll('.mastering-slider__item-three');
const itemsCountMastthree = itemsMastthree.length;
const itemWidthMastthree = containerMastthree.clientWidth / slidesToShowMastthree;
const movePositionMastthree = slidesToScrollMastthree * itemWidthMastthree

itemsMastthree.forEach((itemMastthree) => {
    itemMastthree.style.minWidth = `${itemWidthMastthree}px`;
})

btnPrevMastthree.addEventListener('click', () => {
    const itemsLeft = Math.abs(positionMastthree) / itemWidthMastthree;

    positionMastthree += itemsLeft >= slidesToScrollMastthree ? movePositionMastthree : itemsLeft * itemWidthMastthree;

    setPositionMastthree();
    checkBtnsMastthree();
});

btnNextMastthree.addEventListener('click', () => {
    const itemsLeft = itemsCountMastthree - ((Math.abs(positionMastthree) + (slidesToShowMastthree * itemWidthMastthree)) / itemWidthMastthree);

    positionMastthree -= itemsLeft >= slidesToScrollMastthree ? movePositionMastthree : itemsLeft * itemWidthMastthree;

    setPositionMastthree();
    checkBtnsMastthree();
});

const setPositionMastthree = () => {
    trackMastthree.style.transform = `translateX(${positionMastthree}px)`
};

const checkBtnsMastthree = () => {
    btnPrevMastthree.disabled = positionMastthree === 0;
    btnNextMastthree.disabled = positionMastthree <= -(itemsCountMastthree - slidesToShowMastthree) * itemWidthMastthree;
};

checkBtnsMastthree();