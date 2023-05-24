// -------- FullPage Specification -------- //

const header = document.querySelector('header');
const iarba = document.querySelector('#iarba');
const house = document.querySelector('#house');
const circleLeft = document.querySelector('#circle-left');
const circleRight = document.querySelector('#circle-right');

const page = new fullpage('#fullpage', {
    navigation: true,
    navigationPosition: 'left',
    navigationTooltips: ['ACASĂ', 'SERVICII', 'COLABORARE', 'PROIECTE', 'SPONSORI'],
    showActiveTooltip: true,
    licenseKey: 'gplv3-license',
    responsiveWidth: 1024,
    verticalCentered: false,
    onLeave: function(origin, destination, direction, trigger){
        if (window.innerWidth <= 1024) return;

        if (origin.index == 0) {
            header.classList.add('alt');
            iarba.classList.add('open');
            house.classList.add('open');
        }

        if (destination.index == 0) {
            header.classList.remove('alt');
            iarba.classList.remove('open');
            house.classList.remove('open');

            circleLeft.style.left = '-50vw';
            circleRight.style.right = '-50vw';
        }

        if (destination.index == 1) {
            circleLeft.style.left = '-10vw';
            circleLeft.style.bottom = '-25vh';

            circleRight.style.right = '-10vw';
            circleRight.style.top = '10vh';
        }

        if (destination.index == 3) {
            anime({
                targets: '#surface',
                innerHTML: [8000, 16000],
                round: 1,
                duration: 2000,
                easing: 'easeOutCubic'
            });
            anime({
                targets: '#projects',
                innerHTML: [0, 1000],
                round: 1,
                duration: 2000,
                easing: 'easeOutCubic',
                complete: function(anim) {
                    document.querySelector('#projects').innerHTML += '+';
                }
            });
            anime({
                targets: '#years',
                innerHTML: [0, 20],
                round: 1,
                duration: 2700,
                easing: 'easeOutCubic'
            });
        }
	}
});

// -------- Sponsor Carousell -------- //

const slider = document.querySelector('.partners');
const circle = document.querySelector('#sponsors .circle');

let isDown = false, startX, scrollLeft, xp = 0, yp = 0, mouseX = 0, mouseY = 0;

function end() {
    isDown = false;
    beginMomentumTracking();
    slider.classList.remove('active');
}

function mouseLeave() {
    isDown = false;
    beginMomentumTracking();
    slider.classList.remove('active');
    circle.classList.remove('active');
    circle.classList.add('close');
}

function start(event) {
    isDown = true;
    startX = event.pageX || event.touches[0].pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
    slider.classList.add('active');
    cancelMomentumTracking();
}

function move(event) {
    mouseX = event.pageX - 25;
    mouseY = event.pageY - 25; 

    if (!isDown) return;

    let x = event.pageX || event.touches[0].pageX - slider.offsetLeft;
    let dist = (x - startX);
    let prevScrollLeft = slider.scrollLeft;
    slider.scrollLeft = scrollLeft - dist;
    velX = slider.scrollLeft - prevScrollLeft;
}

setInterval(() => {
    xp += ((mouseX - xp)/6);
    yp += ((mouseY - yp)/6);
    circle.style.left = xp + 'px';
    circle.style.top = yp + 'px';
}, 20);

// Momentum 
var velX = 0;
var momentumID;

function beginMomentumTracking() {
    cancelMomentumTracking();
    momentumID = requestAnimationFrame(momentumLoop);
}

function cancelMomentumTracking() {
    cancelAnimationFrame(momentumID);
}

function momentumLoop() {
    slider.scrollLeft += velX * 2;
    velX *= 0.95;
    if (Math.abs(velX) > 0.5) {
        momentumID = requestAnimationFrame(momentumLoop);
    }
}

slider.addEventListener('mousedown', start);
slider.addEventListener('touchstart', start);

slider.addEventListener('mousemove', move);
slider.addEventListener('touchmove', move);

slider.addEventListener('mouseleave', mouseLeave);
slider.addEventListener('mouseup', end);
slider.addEventListener('touchend', end);

function circleOn(event) {
    mouseX = event.pageX - 25;
    mouseY = event.pageY - 25; 
    circle.classList.add('active');
}

slider.addEventListener('mouseenter', circleOn);

// -------- Glass Panels -------- //

const cards = document.querySelectorAll('.glass .panel');
let currentCard, glassCircle;

function enterCard(event) {
    currentCard = event.currentTarget;
    glassCircle = currentCard.querySelector('.circle-glass');
    glassCircle.classList.remove('close');
    glassCircle.classList.add('open');
}

function moveCard(event) {
    let rect = currentCard.getBoundingClientRect();

    glassCircle.style.left = (event.clientX - rect.left) - (glassCircle.clientHeight / 2) + 'px';
    glassCircle.style.top = (event.clientY - rect.top) - (glassCircle.clientHeight / 2) + 'px';

    let x = (event.clientY - rect.top) / currentCard.clientHeight - 0.5;
    let y = ((event.clientX - rect.left) / currentCard.clientWidth - 0.5) * -1;

    currentCard.style.transform = 'rotateX(' + x + 'deg) rotateY(' + y + 'deg)';
}

function leaveCard() {
    currentCard.style.transform = 'rotateX(0deg) rotateY(0deg)';
    glassCircle.classList.add('close');
    glassCircle.classList.remove('open');
}

cards.forEach(card => {
    card.addEventListener('mouseenter', enterCard);
    card.addEventListener('mouseleave', leaveCard);
    card.addEventListener('mousemove', moveCard);
});


// -------- Panel Carousell -------- //

const panelContainer = document.querySelector('#colab .carousell');
const mobilePanelContainer = document.querySelector('#colab .mobile');
let panelCircles = document.querySelectorAll('#colab .circle');

let panelIndex = 0;

function moveRight() {
    let tempContainer;
    if (window.innerWidth <= 1024) {
        tempContainer = mobilePanelContainer;
    } else {
        tempContainer = panelContainer;
    }

    let widthPanel = tempContainer.querySelector('.first');
    let panels = tempContainer.querySelectorAll('.panel');
    panelCircles = tempContainer.querySelectorAll('.circle');

    var style = widthPanel.currentStyle || window.getComputedStyle(widthPanel);
    const width = widthPanel.clientWidth + parseFloat(style.marginLeft) + parseFloat(style.marginRight) + parseFloat(style.borderLeft) + parseFloat(style.borderRight);
    panelIndex++;

    if (panelIndex >= panels.length) {
        panelIndex--;
        return;
    }
    tempContainer.style.transform = 'translateX(' + panelIndex * -width + 'px)';
}

function moveLeft() {
    let tempContainer;
    if (window.innerWidth <= 1024) {
        tempContainer = mobilePanelContainer;
    } else {
        tempContainer = panelContainer;
    }

    let widthPanel = tempContainer.querySelector('.first');
    panelCircles = tempContainer.querySelectorAll('.circle');

    var style = widthPanel.currentStyle || window.getComputedStyle(widthPanel);
    const width = widthPanel.clientWidth + parseFloat(style.marginLeft) + parseFloat(style.marginRight) + parseFloat(style.borderLeft) + parseFloat(style.borderRight);
    panelIndex--;

    if (panelIndex < 0) {
        panelIndex = 0;
        return;
    }

    tempContainer.style.transform = 'translateX(' + panelIndex * -width + 'px)';
}

const leftArrows = document.querySelectorAll('#colab .arrow.left');
const rightArrows = document.querySelectorAll('#colab .arrow.right');

leftArrows.forEach(arrow => {
    arrow.addEventListener('click', moveLeft);
});

rightArrows.forEach(arrow => {
    arrow.addEventListener('click', moveRight);
})

function cirlceMove(event) {
    let tempContainer;
    if (window.innerWidth <= 1024) {
        tempContainer = mobilePanelContainer;
    } else {
        tempContainer = panelContainer;
    }

    let panels = tempContainer.querySelectorAll('.panel');
    panelCircles = panels[panelIndex].querySelectorAll('.circle');
    let widthPanel = tempContainer.querySelector('.first');

    var style = widthPanel.currentStyle || window.getComputedStyle(widthPanel);
    const width = widthPanel.clientWidth + parseFloat(style.marginLeft) + parseFloat(style.marginRight) + parseFloat(style.borderLeft) + parseFloat(style.borderRight);

    for (let i = 0; i < panelCircles.length; i++) {
        if (panelCircles[i].isEqualNode(event.target)) {
            panelIndex = i;
            tempContainer.style.transform = 'translateX(' + panelIndex * -width + 'px)';
            return;
        }
    }
}

panelCircles.forEach (circle => {
    circle.addEventListener('click', cirlceMove);
});

let panelStartX = 0, panelDist = 0;

function touchStart(e) {
    let touchobj = e.changedTouches[0];
    panelStartX = parseInt(touchobj.clientX);
}

function touchMove(e) {
    let touchobj = e.changedTouches[0];
    panelDist = parseInt(touchobj.clientX) - panelStartX;

}

function touchEnd() {
    if (panelDist > 50) {
        moveLeft();
     } else if (panelDist < -50) {
        moveRight();
     }
     panelDist = 0;
}

const mobilePanels = mobilePanelContainer.querySelectorAll('.panel');

mobilePanels.forEach (panel => {
    panel.addEventListener('touchstart', touchStart);
    panel.addEventListener('touchmove', touchMove);
    panel.addEventListener('touchend', touchEnd);
});


// -------- Scroll Mobile -------- //

const serviceSection = document.querySelector('#service');

function scrollMobile() {
    if (window.innerWidth > 1023) return;

    if (serviceSection.getBoundingClientRect().top < 10) {
        circleLeft.style.left = '-150px';
        circleRight.style.right = '-150px';
        header.classList.add('mobile');
    }
    else {
        circleLeft.style.left = '-350px';
        circleRight.style.right = '-350px';
        header.classList.remove('mobile');
    }


} 

window.addEventListener('scroll', scrollMobile);
