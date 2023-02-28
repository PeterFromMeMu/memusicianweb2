const tabsBtn = document.querySelectorAll('.tabs__nav-btn');
const tabsItem = document.querySelectorAll('.tabs__item')

tabsBtn.forEach(function(item){
    item.addEventListener('click', function() {
        let currentBtn = item;
        let tabId = currentBtn.getAttribute('data-tab');
        let currentTab = document.querySelector(tabId)

        if( ! currentBtn.classList.contains('is-active') ) {
            tabsBtn.forEach(function(item){
                item.classList.remove('is-active');
            });
    
            tabsItem.forEach(function(item){
                item.classList.remove('is-active');
            });
    
            currentBtn.classList.add('is-active');
            currentTab.classList.add('is-active');
        }
    });
});