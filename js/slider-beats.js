let position = 0;
const slidesToShow = 5;
const slidesToScroll = 2;
const container =  document.querySelector('.beatmakers-slider__container');
const track =  document.querySelector('.beatmakers-slider__track');
const item =  document.querySelector('.beatmakers-slider__item');
const btnPrev = document.querySelector('.beat-btn__prev');
const btnNext = document.querySelector('.beat-btn__next');
const items = document.querySelectorAll('.beatmakers-slider__item');
const itemsCount = items.length;
const itemWidth = container.clientWidth / slidesToShow;
const movePosition = slidesToScroll * itemWidth

items.forEach((item) => {
    item.style.minWidth = `${itemWidth}px`;
})

btnPrev.addEventListener('click', () => {
    const itemsLeft = Math.abs(position) / itemWidth;

    position += itemsLeft >= slidesToScroll ? movePosition : itemsLeft * itemWidth;

    setPosition();
    checkBtns();
});

btnNext.addEventListener('click', () => {
    const itemsLeft = itemsCount - ((Math.abs(position) + (slidesToShow * itemWidth)) / itemWidth);

    position -= itemsLeft >= slidesToScroll ? movePosition : itemsLeft * itemWidth;

    setPosition();
    checkBtns();
});

const setPosition = () => {
    track.style.transform = `translateX(${position}px)`
};

const checkBtns = () => {
    btnPrev.disabled = position === 0;
    btnNext.disabled = position <= -(itemsCount - slidesToShow) * itemWidth;
};

checkBtns();