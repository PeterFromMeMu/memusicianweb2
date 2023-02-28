let positionTablet = 0;
const slidesToShowTablet = 4;
const slidesToScrollTablet = 2;
const containerTablet =  document.querySelector('.beatmakers-slider__container-tablet');
const trackTablet =  document.querySelector('.beatmakers-slider__track-tablet');
const itemTablet =  document.querySelector('.beatmakers-slider__item-tablet');
const btnPrevTablet = document.querySelector('.beat-btn__prev-tablet');
const btnNextTablet = document.querySelector('.beat-btn__next-tablet');
const itemsTablet = document.querySelectorAll('.beatmakers-slider__item-tablet');
const itemsCountTablet = itemsTablet.length;
const itemWidthTablet = containerTablet.clientWidth / slidesToShowTablet;
const movePositionTablet = slidesToScrollTablet * itemWidthTablet

itemsTablet.forEach((itemTablet) => {
    itemTablet.style.minWidth = `${itemWidthTablet}px`;
})

btnPrevTablet.addEventListener('click', () => {
    const itemsLeft = Math.abs(positionTablet) / itemWidthTablet;

    positionTablet += itemsLeft >= slidesToScrollTablet ? movePositionTablet : itemsLeft * itemWidthTablet;

    setPositionTablet();
    checkBtnsTablet();
});

btnNextTablet.addEventListener('click', () => {
    const itemsLeft = itemsCountTablet - ((Math.abs(positionTablet) + (slidesToShowTablet * itemWidthTablet)) / itemWidthTablet);

    positionTablet -= itemsLeft >= slidesToScrollTablet ? movePositionTablet : itemsLeft * itemWidthTablet;

    setPositionTablet();
    checkBtnsTablet();
});

const setPositionTablet = () => {
    trackTablet.style.transform = `translateX(${positionTablet}px)`
};

const checkBtnsTablet = () => {
    btnPrevTablet.disabled = positionTablet === 0;
    btnNextTablet.disabled = positionTablet <= -(itemsCountTablet - slidesToShowTablet) * itemWidthTablet;
};

checkBtnsTablet();