const defaultSelect = () => {
    const element1 = document.querySelector('#choice1');
    const choices1 = new Choices(element1, {
        searchEnabled: false,
        itemSelectText: ''
    });

    const element2 = document.querySelector('#choice2');
    const choices2 = new Choices(element2, {
        searchEnabled: false,
        itemSelectText: ''
    });

    const element3 = document.querySelector('#choice3');
    const choices3 = new Choices(element3, {
        searchEnabled: false,
        itemSelectText: ''
    });

    const element4 = document.querySelector('#choice4');
    const choices4 = new Choices(element4, {
        searchEnabled: false,
        itemSelectText: ''
    });
};

defaultSelect();