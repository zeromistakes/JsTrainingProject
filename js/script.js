window.addEventListener('DOMContentLoaded', () => {
    const tabs = document.querySelectorAll('.tabheader__item'),
        tabsContent = document.querySelectorAll('.tabcontent'),
        tabsContainer = document.querySelector('.tabheader__items');

    function hideTabContent() {
        tabsContent.forEach((contentElem, i) => {
            contentElem.classList.add('hide');
            contentElem.classList.remove('show');
        })

        tabs.forEach((tab) => {
            tab.classList.remove('tabheader__item_active');
        })
    }

    function showTabContent(i = 0) {
        tabsContent[i].classList.add('show');
        tabsContent[i].classList.remove('hide');
        tabs[i].classList.add('tabheader__item_active');
    }

    hideTabContent();
    showTabContent();

    tabsContainer.addEventListener('click', (e) => {
        if (e.target && e.target.classList.contains('tabheader__item')) {
            tabs.forEach((tab, i) => {
                if (e.target == tab) {
                    hideTabContent();
                    showTabContent(i);
                }
            })
        }
    });
})