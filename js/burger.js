const hamb = document.querySelector('#hamb');
const popup = document.querySelector('#popup');
const closeButton = document.querySelector('#close')

hamb.addEventListener('click', hambHandler);
closeButton.addEventListener('click', hambHandlerRemove);

function hambHandler(e) {
    e.preventDefault();
    popup.classList.add('active-burger')
}

function hambHandlerRemove(e) {
    e.preventDefault();
    popup.classList.remove('active-burger')
}