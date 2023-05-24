// -------- Circle Movement -------- //

const circles = document.querySelectorAll('.background .circle');

function moveCircles(event) {
    let x = (event.pageX / window.innerWidth - 0.5) ;
    let y = (event.pageY / window.innerHeight - 0.5);

    circles[0].style.transform = 'translate(' + x * 15 + '%,' + y * 15 +'%)';
    circles[1].style.transform = 'translate(' + x * -15 + '%,' + y * -15 +'%)';
}

window.addEventListener('mousemove', moveCircles);


// -------- Particle Movement -------- //

const particles = document.querySelectorAll(".background .particle");
let index = 0;

particles.forEach(particle => {
    particle.style.transform = 'translateY(' + anime.random(200, window.innerHeight) + 'px)';
    particle.style.animationDelay = index + 's';
    index ++;
});

anime({
    targets: particles,
    translateX: '110vw',
    translateY: function() {
        return anime.random(100, window.innerHeight);
      },
    duration: 10000,
    easing: 'linear',
    loop: true,
    delay: anime.stagger(2000)
});


// -------- Menu -------- //

const menu = document.querySelector('.menu');
const menuButton = document.querySelector('.menu-btn')
const menuLinks = menu.querySelectorAll('.link');

const lineOne = menuButton.querySelector('.line--1');
const lineTwo = menuButton.querySelector('.line--2');
const lineThree = menuButton.querySelector('.line--3');

function openMenu() {
    menu.classList.toggle('active');

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

function revealSections(event) {
    const link = event.currentTarget;
    const arrow = link.querySelector('img');
    const sections = link.nextElementSibling;
    const items = sections.querySelectorAll('a');

    arrow.classList.toggle('open');

    if (arrow.classList.contains('open')) {
        sections.classList.add('open');
        anime({
            targets: sections,
            height: el => el.scrollHeight,
            duration: 400,
            easing: 'easeOutCubic',
            complete() {
            }
        });

        anime({
            targets: items,
            opacity:1,
            duration: 500,
            easing: 'easeOutCubic',
            delay: anime.stagger(100)
        });

    } else {
        anime({
            targets: sections,
            height: 0,
            duration: 400,
            easing: 'easeOutCubic',
            complete() {
            }
        });

        anime({
            targets: items,
            opacity:0,
            duration: 200,
            easing: 'easeOutCubic',
            complete: () => {
                sections.classList.remove('open');
            }
        })
    }
    
}

menuLinks.forEach(link => {
    link.addEventListener("click", revealSections);
})