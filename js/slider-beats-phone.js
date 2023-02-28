let positionphone = 0;
const slidesToShowphone = 2;
const slidesToScrollphone = 2;
const containerphone =  document.querySelector('.beatmakers-slider__container-phone');
const trackphone =  document.querySelector('.beatmakers-slider__track-phone');
const itemphone =  document.querySelector('.beatmakers-slider__item-phone');
const btnPrevphone = document.querySelector('.beat-btn__prev-phone');
const btnNextphone = document.querySelector('.beat-btn__next-phone');
const itemsphone = document.querySelectorAll('.beatmakers-slider__item-phone');
const itemsCountphone = itemsphone.length;
const itemWidthphone = containerphone.clientWidth / slidesToShowphone;
const movePositionphone = slidesToScrollphone * itemWidthphone

itemsphone.forEach((itemphone) => {
    itemphone.style.minWidth = `${itemWidthphone}px`;
})

btnPrevphone.addEventListener('click', () => {
    const itemsLeft = Math.abs(positionphone) / itemWidthphone;

    positionphone += itemsLeft >= slidesToScrollphone ? movePositionphone : itemsLeft * itemWidthphone;

    setPositionphone();
    checkBtnsphone();
});

btnNextphone.addEventListener('click', () => {
    const itemsLeft = itemsCountphone - ((Math.abs(positionphone) + (slidesToShowphone * itemWidthphone)) / itemWidthphone);

    positionphone -= itemsLeft >= slidesToScrollphone ? movePositionphone : itemsLeft * itemWidthphone;

    setPositionphone();
    checkBtnsphone();
});

const setPositionphone = () => {
    trackphone.style.transform = `translateX(${positionphone}px)`
};

const checkBtnsphone = () => {
    btnPrevphone.disabled = positionphone === 0;
    btnNextphone.disabled = positionphone <= -(itemsCountphone - slidesToShowphone) * itemWidthphone;
};

checkBtnsphone();