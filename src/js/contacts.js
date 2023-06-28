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

const sumbit = document.querySelector('#submit');

function sendMessage(event) {
    event.preventDefault();

    let name = document.querySelector("#name").value;
    let tel = document.querySelector("#tel").value;
    let email = document.querySelector('#email').value;
    let detalii = document.querySelector('#detalii').value;
    let phoneNumber = 37369150744;

    let url = "https://wa.me/" + phoneNumber + "?text="
    + 'Bună! Mă numesc, ' + name + '. ' + 'Serviciile ce mă interessează sunt:';

    servicesButtons.forEach(button => {
        if (button.classList.contains('active')) url += ' ' + button.textContent;
    })

    url += '. Nr. meu de telefon: ' + tel + '. Email: ' 
    + email + '. Detailiile proiectului meu: ' + detalii;

    console.log(url);

    window.open(url,'_blank').focus();
}

sumbit.addEventListener('click', sendMessage);