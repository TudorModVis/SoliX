const servicesButtons = document.querySelectorAll('.service');

function activateService(event) {
    event.currentTarget.classList.toggle('active');
}

servicesButtons.forEach(button => {
    button.addEventListener('click', activateService);
});

// -------- Menu -------- //

const lang = document.getElementById('lang');
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

        lang.style.display = 'block';
        anime({
            targets: lang,
            opacity: 1,
            delay: 400
        });
    } else {
        anime({
            targets: lang,
            opacity: 0,
            duration: 200,
            complete: () => {
                lang.style.display = 'none';
            }
        });
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


// -------- Projects Selector -------- //
const projects = [{
    titlu: 'Forward International - Depozit frigorific',
    localitate: 'Chișinău',
    suprafata: '16.000 m2',
    anul: 2021
},
{
    titlu: 'Casă particulară - 11 kw',
    localitate: 'Schinoasa',
    suprafata: '11 kW',
    anul: 2023
},
{
    titlu: 'Sun City - Construcție comercială',
    localitate: 'Chișinău',
    suprafata: '1.500 m2',
    anul: 2020
},
{
    titlu: 'Agropiese TGR / Master LUX - Construcție comercială',
    localitate: 'Bălți',
    suprafata: '5.000 m2',
    anul: 2007
},
{
    titlu: 'Frigider pentru păstrarea fructelor - 60kW',
    localitate: 'Balțata',
    suprafata: '60 kW',
    anul: 2022
},
{
    titlu: 'Centrul pentru Tineret și Sport - Complex sportiv',
    localitate: 'Căușeni',
    suprafata: '6.000 m2',
    anul: 2013
},
{
    titlu: 'NANU Market - Construcție comercială și Depozit',
    localitate: 'Chișinău',
    suprafata: '8.000 m2',
    anul: 2011
},
{
    titlu: 'Casă particulară - 10kW',
    localitate: 'Dumbrava',
    suprafata: '10 kW',
    anul: 2023
},
{
    titlu: 'Cegoltar - Construcție  comercială și Depozit',
    localitate: 'Chișinău',
    suprafata: '4.000 m2',
    anul: 2020
},
{
    titlu: 'Casă particulară - 7 kW',
    localitate: 'Anenii Noi',
    suprafata: '7 kW',
    anul: 2023
},
{
    titlu: 'Cap-Cap - Construcție comercială și Showroom',
    localitate: 'Chișinău',
    suprafata: '3.000 m2',
    anul: 2018
},
{
    titlu: 'Megapolis - Construcție comercială',
    localitate: 'Chișinău',
    suprafata: '200 m2',
    anul: 2010
},
{
    titlu: 'Piața Centru din Căușeni - Construcție comercială',
    localitate: 'Căușeni',
    suprafata: '3.000 m2',
    anul: 2018
},
{
    titlu: 'Teraru Auto Serive - Spălătorie Auto cu Service',
    localitate: 'Chișinău',
    suprafata: '1.000 m2',
    anul: 2019
},
{
    titlu: 'Construcție comercială str. Igor Vieru',
    localitate: 'Chișinău',
    suprafata: '2.000 m2',
    anul: 2012
},
{
    titlu: 'Fabrica de Brichete - Spațiu de producere cu Depozit',
    localitate: 'Porumbeni',
    suprafata: '4.500 m2',
    anul: 2015
},
{
    titlu: 'Avicola Floreni - Hale de păsări',
    localitate: 'Floreni',
    suprafata: '20.000 m2',
    anul: 2017
},
{
    titlu: 'Producere confecții metalice cu Depozit',
    localitate: 'Ialoveni',
    suprafata: '2.000 m2',
    anul: 2018
},
{
    titlu: 'Depozit cu Complex Oficii str. Uzinelor',
    localitate: 'Chișinău',
    suprafata: '1.200 m2',
    anul: 2014
},
{
    titlu: 'Tronex-Com - Construcție comercială',
    localitate: 'Chișinău',
    suprafata: '2.500 m2',
    anul: 2013
},
{
    titlu: 'Benett-Auto Group - Service Auto cu Depozit',
    localitate: 'Sîngera',
    suprafata: '4.000 m2',
    anul: 2010
},
{
    titlu: 'Service Auto cu Spălătorie',
    localitate: 'Nisporeni',
    suprafata: '1.800 m2',
    anul: 2018
},
{
    titlu: 'Cheton Grup - Fabrică de vopsele',
    localitate: 'Chișinău',
    suprafata: '4.000 m2',
    anul: 2017
},
{
    titlu: 'Garduri.MD - Fabrica de plase și garduri',
    localitate: 'Chișinău',
    suprafata: '1.300 m2',
    anul: 2017
},
{
    titlu: 'Depozit frigorific str. Varnița',
    localitate: 'Chișinău',
    suprafata: '350 m2',
    anul: 2018
},
{
    titlu: 'Lapmol - Complex Oficii și Depozit frigorific',
    localitate: 'Chișinău',
    suprafata: '3.500 m2',
    anul: 2015
},
{
    titlu: 'Service Auto și Spălătorie',
    localitate: 'Căușeni',
    suprafata: '1.200 m2',
    anul: 2013
},
{
    titlu: 'Fabrica de cusut, confecții',
    localitate: 'Vulcănești',
    suprafata: '4.000 m2',
    anul: 2012
},
{
    titlu: 'Garma Grup - Spațiu de producere',
    localitate: 'Fîrlădeni',
    suprafata: '1.500 m2',
    anul: 2012
},]

const container = document.querySelector('.container');
let count = 0, n = 4, end = false;

function generateProjects() {
    for (let i = count; i < n; i++) {
        if (i % 2 == 0) {
            container.innerHTML += 
        `<div class="flex flex-col lg:flex-row justify-between lg:h-[55vh] gap-[20px] lg:gap-0 mb-[50px] lg:mb-[7vh]">
            <img src="../images/PORTFOLIO/p${i + 1}.webp" alt="" class="w-full lg:w-[38%] h-full object-cover rounded-2xl">
            <div class="w-full lg:w-[18%] h-full flex lg:flex-col justify-between">
                <img src="../images/PORTFOLIO/p${i + 1} 1.webp" alt="" class="lg:h-[48%] w-[48%] lg:w-auto rounded-2xl">
                <img src="../images/PORTFOLIO/p${i + 1} 2.webp" alt="" class="lg:h-[48%] w-[48%] lg:w-auto rounded-2xl">
            </div>
            <div class="glass w-full lg:w-[40%] max-h-full text-[#f1f1f1]">
                <div class="panel w-full px-[20px] lg:px-[2.6vw] py-[20px] lg:py-[2.3vh] 2xl:py-[3.7vh] overflow-hidden flex flex-col lg:justify-between gap-[20px] lg:gap-0 max-h-full min-h-full">
                    <div class="circle-glass"></div>
                    <h3 class="text-2xl font-bold text-center lg:text-left">${projects[i].titlu}</h3>
                    <div>
                        <div class="flex justify-between mb-[2.3vh]">
                            <div>
                                <h3 class="font-bold text-2xl lg:text-base 2xl:text-xl mb-[20px] lg:mb-[2vh]">Locație</h3>
                                <p class="text-xl lg:text-base">${projects[i].localitate}</p>
                            </div>
                            <img src="../images/PORTFOLIO/ICONS/suprafata.svg" alt="" class="h-[4.5vh]">
                        </div>
                        <div class="flex justify-between mb-[2.3vh]">
                            <div>
                                <h3 class="font-bold text-2xl lg:text-base 2xl:text-xl mb-[20px] lg:mb-[2vh]">Suprafața</h3>
                                <p class="text-xl lg:text-base">${projects[i].suprafata}</p>
                            </div>
                            <img src="../images/PORTFOLIO/ICONS/inaltime.svg" alt="" class="h-[4.5vh]">
                        </div>
                        <div class="flex justify-between">
                            <div>
                                <h3 class="font-bold text-2xl lg:text-base 2xl:text-xl mb-[20px] lg:mb-[2vh]">Anul construcției</h3>
                                <p class="text-xl lg:text-base">${projects[i].anul}</p>
                            </div>
                            <img src="../images/PORTFOLIO/ICONS/calendar.svg" alt="" class="h-[4.5vh]">
                        </div>
                    </div>
                </div>
            </div>
        </div>`;
        } else {
            container.innerHTML += 
            `<div class="flex flex-col lg:flex-row justify-between lg:h-[55vh] gap-[20px] lg:gap-0 mb-[50px] lg:mb-[7vh]">
            <img src="../images/PORTFOLIO/p${i + 1}.webp" alt="" class="w-full lg:w-[38%] h-full object-cover rounded-2xl lg:hidden">
            <div class="w-full lg:w-[18%] h-full flex lg:flex-col justify-between lg:hidden">
                <img src="../images/PORTFOLIO/p${i + 1} 1.webp" alt="" class="lg:h-[48%] w-[48%] lg:w-auto rounded-2xl">
                <img src="../images/PORTFOLIO/p${i + 1} 2.webp" alt="" class="lg:h-[48%] w-[48%] lg:w-auto rounded-2xl">
            </div>
            <div class="glass w-full lg:w-[40%] max-h-full text-[#f1f1f1]">
                <div class="panel w-full px-[20px] lg:px-[2.6vw] py-[20px] lg:py-[2.3vh] 2xl:py-[3.7vh] overflow-hidden flex flex-col lg:justify-between gap-[20px] lg:gap-0 max-h-full min-h-full">
                    <div class="circle-glass"></div>
                    <h3 class="text-2xl font-bold text-center lg:text-left">${projects[i].titlu}</h3>
                    <div>
                        <div class="flex justify-between mb-[2.3vh]">
                            <div>
                                <h3 class="font-bold text-2xl lg:text-base 2xl:text-xl mb-[20px] lg:mb-[2vh]">Locație</h3>
                                <p class="text-xl lg:text-base">${projects[i].localitate}</p>
                            </div>
                            <img src="../images/PORTFOLIO/ICONS/suprafata.svg" alt="" class="h-[4.5vh]">
                        </div>
                        <div class="flex justify-between mb-[2.3vh]">
                            <div>
                                <h3 class="font-bold text-2xl lg:text-base 2xl:text-xl mb-[20px] lg:mb-[2vh]">Suprafața</h3>
                                <p class="text-xl lg:text-base">${projects[i].suprafata}</p>
                            </div>
                            <img src="../images/PORTFOLIO/ICONS/inaltime.svg" alt="" class="h-[4.5vh]">
                        </div>
                        <div class="flex justify-between">
                            <div>
                                <h3 class="font-bold text-2xl lg:text-base 2xl:text-xl mb-[20px] lg:mb-[2vh]">Anul construcției</h3>
                                <p class="text-xl lg:text-base">${projects[i].anul}</p>
                            </div>
                            <img src="../images/PORTFOLIO/ICONS/calendar.svg" alt="" class="h-[4.5vh]">
                        </div>
                    </div>
                </div>
            </div>
            <img src="../images/PORTFOLIO/p${i + 1}.webp" alt="" class="w-full lg:w-[38%] h-full object-cover rounded-2xl hidden lg:block">
            <div class="w-full lg:w-[18%] h-full lg:flex lg:flex-col justify-between hidden">
                <img src="../images/PORTFOLIO/p${i + 1} 1.webp" alt="" class="lg:h-[48%] w-[48%] lg:w-auto rounded-2xl">
                <img src="../images/PORTFOLIO/p${i + 1} 2.webp" alt="" class="lg:h-[48%] w-[48%] lg:w-auto rounded-2xl">
            </div>
        </div>`;
        }
    }
    
    cards = document.querySelectorAll('.glass .panel');

    cards.forEach(card => {
        card.addEventListener('mouseenter', enterCard);
        card.addEventListener('mouseleave', leaveCard);
        card.addEventListener('mousemove', moveCard);
    });

    if (end == true) {
        moreButton.style.display = 'none';
    }
    count = n;
    n += 4;
    if (n > projects.length) {
        n = projects.length;
        end = true;
    }
}

const moreButton = document.getElementById('submit');

moreButton.addEventListener('click', generateProjects);
generateProjects();

// -------- Loading -------- //
const loadingScreens = document.querySelector('.loading');
if (window.innerWidth >= 1024) {
    document.body.style.overflow = 'hidden';
  }

function stopLoading() {
    setTimeout(() => {
        anime({
            targets: loadingScreens,
            opacity: 0,
            complete: () => {
                document.body.style.overflow = 'auto';
                loadingScreens.style.display = 'none';
            },
            easing: 'easeInOutQuad',
            duration: 800
        });
    }, 2800);
}

window.addEventListener('load', stopLoading);