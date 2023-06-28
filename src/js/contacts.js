const servicesButtons = document.querySelectorAll('.service');

function activateService(event) {
    event.currentTarget.classList.toggle('active');
}

servicesButtons.forEach(button => {
    button.addEventListener('click', activateService);
});

// -------- Menu -------- //

const header = document.querySelector('header');
function openMenu() {
    menu.classList.toggle('active');
    document.body.classList.toggle('active');

    lineOne.classList.toggle('line-cross');
    lineTwo.classList.toggle('line-fade-out');
    lineThree.classList.toggle('line-cross');

    if (menu.classList.contains('active')) {
        header.classList.toggle('menu');
        setTimeout(() => {
            anime({
                targets: menuLinks,
                translateX: [100, 0],
                duration: 1500,
                opacity: 1,
                delay: anime.stagger(100)
            });
        }, 400);
    } else {
        setTimeout(() => { header.classList.toggle('menu'); }, 500)
        
        anime({
            targets: menuLinks,
            translateX: 100,
            duration: 1500,
            opacity: 0,
            delay: anime.stagger(100)
        });
    }
}

menuButton.addEventListener('click', openMenu);