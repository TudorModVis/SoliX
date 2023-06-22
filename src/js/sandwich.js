// -------- FullPage Specification -------- //

const header = document.querySelector('header');
const iarba = document.querySelector('#iarba');
const house = document.querySelector('#house');
const circleLeft = document.querySelector('#circle-left');
const circleRight = document.querySelector('#circle-right');
const logo = document.getElementById('logo');

const socialMenu = document.querySelector('.social-menu');

const page = new fullpage('#fullpage', {
    navigation: true,
    navigationPosition: 'left',
    navigationTooltips: ['ACASĂ', 'AVANTAJE', 'SERVICII', 'PROCESUL', 'PROIECTE'],
    showActiveTooltip: true,
    licenseKey: 'gplv3-license',
    responsiveWidth: 1024,
    verticalCentered: false,
    onLeave: function(origin, destination, direction, trigger){
      if (destination.index == 4) {
        anime({
            targets: socialMenu,
            opacity: 0,
            easing: 'easeOutQuad',
            duration: 300,
            complete: () => {
                socialMenu.style.display = 'none';
            }
        });
    }

    if (origin.index == 4) {
        socialMenu.style.display = 'block';
        anime({
            targets: socialMenu,
            opacity: 1,
            easing: 'easeOutQuad',
            duration: 300,
        });
    }

        if (window.innerWidth <= 1024) return;

        if (origin.index == 0) {
            header.classList.add('alt');
            logo.src = '../images/SANDWICH/logo-alb.png';
            iarba.classList.add('open');
            house.classList.add('open');
            navigationSpan.forEach(nav => nav.classList.add('white'));
            navigationText.forEach(nav => nav.classList.add('white'));

            circleLeft.style.left = '-10vw';
            circleLeft.style.bottom = '-25vh';

            circleRight.style.right = '-10vw';
            circleRight.style.top = '10vh';
        }

        if (destination.index == 0) {
            header.classList.remove('alt');
            logo.src = '../images/SANDWICH/logo-negru.png';
            iarba.classList.remove('open');
            house.classList.remove('open');
            navigationSpan.forEach(nav => nav.classList.remove('white'));
            navigationText.forEach(nav => nav.classList.remove('white'));

            circleLeft.style.left = '-50vw';
            circleRight.style.right = '-50vw';
        }
	}
});

const navigationSpan = document.querySelectorAll('#fp-nav ul li a span');
const navigationText = document.querySelectorAll('#fp-nav ul li .fp-tooltip.fp-left');

// -------- Scroll Mobile -------- //

const serviceSection = document.querySelector('#service');

function scrollMobile() {
    if (window.innerWidth > 1023) return;

    if (serviceSection.getBoundingClientRect().top < 10) {
        circleLeft.style.left = '-150px';
        circleRight.style.right = '-150px';
        header.classList.add('mobile');
        logo.src = '../images/SANDWICH/logo-alb.png';
    }
    else {
        circleLeft.style.left = '-350px';
        circleRight.style.right = '-350px';
        header.classList.remove('mobile');
        logo.src = '../images/SANDWICH/logo-negru.png';
    }
} 

window.addEventListener('scroll', scrollMobile);


// -------- Menu -------- //

function openMenu() {
    menu.classList.toggle('active');
  
    lineOne.classList.toggle('line-cross');
    lineTwo.classList.toggle('line-fade-out');
    lineThree.classList.toggle('line-cross');
  
    if (menu.classList.contains('active')) {
      fullpage_api.setAllowScrolling(false);
      logo.src = '../images/SANDWICH/logo-alb.png';
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
        fullpage_api.setAllowScrolling(true);
        closeSection();
  
        if (!header.classList.contains('mobile') && !header.classList.contains('alt')) logo.src = '../images/SANDWICH/logo-negru.png';
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
  
  function closeSection() {
      const link = document.querySelector('.unfold');
      const arrow = link.querySelector('img');
      const sections = link.nextElementSibling;
      const items = sections.querySelectorAll('a');
  
      arrow.classList.remove('open');
  
      anime.remove(items);
      anime({
        targets: items,
        opacity:0,
        duration: 200,
        easing: 'easeOutCubic',
        complete: () => {
            sections.classList.remove('open');
        }
      });
      anime({
        targets: sections,
        height: 0,
        duration: 400,
        easing: 'easeOutCubic',
        complete() {
        }
      });
  }
  
  menuButton.addEventListener('click', openMenu);
  
  const sectionLinks =  document.querySelectorAll('.sections a');
  
  sectionLinks.forEach(link => {
      link.addEventListener("click", () => {
          openMenu();
      })
  })


// -------- Sandwich types -------- //

const prindereAscunsa = document.getElementById('prindere-ascunsa');
const prindereVizibila = document.getElementById('prindere-vizibila');
const treiCute = document.getElementById('trei-cute');
const cinciCute = document.getElementById('cinci-cute');

const grosime = document.querySelectorAll('#grosime span');
const grosimeTabla = document.querySelectorAll('#grosime-tabla span');
const greutate = document.querySelectorAll('#greutate span');
const transfer = document.querySelectorAll('#transfer span');

const tipImg = document.getElementById('tip-img');

function deschidePrindereAscunsa(grosime1, grosime2, grosimeTabla1, grosimeTabla2, greutate1, greutate2, transfer1, transfer2, src) {
    countNumbers(grosime[0], grosime1, 1);
    countNumbers(grosime[1], grosime2, 1);
    countNumbers(grosimeTabla[0], grosimeTabla1, 10);
    countNumbers(grosimeTabla[1], grosimeTabla2, 10);
    countNumbers(greutate[0], greutate1, 100);
    countNumbers(greutate[1], greutate2, 100);
    countNumbers(transfer[0], transfer1, 100);
    countNumbers(transfer[1], transfer2, 100);

    tipImg.src = src;
}

function countNumbers(target, num, round) {
    anime({
        targets: target,
        innerHTML: [0, num],
        round: round,
        easing: 'easeOutSine',
        duration: 1000
    })
}

let last = prindereAscunsa;

prindereAscunsa.addEventListener('click', () => {
    if (last == prindereAscunsa) return;
    prindereAscunsa.classList.add('active');
    deschidePrindereAscunsa(25, 150, 0.4, 0.6, 9.31, 14.93, 0.48, 0.2, '../images/SANDWICH/TYPES/prindere ascunsa.png');
    last.classList.remove('active');
    last = prindereAscunsa;
});

prindereVizibila.addEventListener('click', () => {
    if (last == prindereVizibila) return;
    prindereVizibila.classList.add('active');
    deschidePrindereAscunsa(40, 100, 0.4, 0.6, 8.95, 15.79, 0.75, 0.13, '../images/SANDWICH/TYPES/prindere vizibila.png');
    last.classList.remove('active');
    last = prindereVizibila;
});

treiCute.addEventListener('click', () => {
    if (last == treiCute) return;
    treiCute.classList.add('active');
    deschidePrindereAscunsa(30, 100, 0.5, 0.6, 9.83, 11.49, 0.59, 0.2, '../images/SANDWICH/TYPES/trei cute.png');
    last.classList.remove('active');
    last = treiCute;
});

cinciCute.addEventListener('click', () => {
    if (last == cinciCute) return;
    cinciCute.classList.add('active');
    deschidePrindereAscunsa(20, 120, 0.4, 0.6, 9.85, 15.46, 0.73, 0.16, '../images/SANDWICH/TYPES/cinci cute.png');
    last.classList.remove('active');
    last = cinciCute;
});