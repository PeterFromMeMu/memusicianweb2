let positionthree = 0;
const slidesToShowthree = 3;
const slidesToScrollthree = 2;
const containerthree =  document.querySelector('.beatmakers-slider__container-three');
const trackthree =  document.querySelector('.beatmakers-slider__track-three');
const itemthree =  document.querySelector('.beatmakers-slider__item-three');
const btnPrevthree = document.querySelector('.beat-btn__prev-three');
const btnNextthree = document.querySelector('.beat-btn__next-three');
const itemsthree = document.querySelectorAll('.beatmakers-slider__item-three');
const itemsCountthree = itemsthree.length;
const itemWidththree = containerthree.clientWidth / slidesToShowthree;
const movePositionthree = slidesToScrollthree * itemWidththree

itemsthree.forEach((itemthree) => {
    itemthree.style.minWidth = `${itemWidththree}px`;
})

btnPrevthree.addEventListener('click', () => {
    const itemsLeft = Math.abs(positionthree) / itemWidththree;

    positionthree += itemsLeft >= slidesToScrollthree ? movePositionthree : itemsLeft * itemWidththree;

    setPositionthree();
    checkBtnsthree();
});

btnNextthree.addEventListener('click', () => {
    const itemsLeft = itemsCountthree - ((Math.abs(positionthree) + (slidesToShowthree * itemWidththree)) / itemWidththree);

    positionthree -= itemsLeft >= slidesToScrollthree ? movePositionthree : itemsLeft * itemWidththree;

    setPositionthree();
    checkBtnsthree();
});

const setPositionthree = () => {
    trackthree.style.transform = `translateX(${positionthree}px)`
};

const checkBtnsthree = () => {
    btnPrevthree.disabled = positionthree === 0;
    btnNextthree.disabled = positionthree <= -(itemsCountthree - slidesToShowthree) * itemWidththree;
};

checkBtnsthree();