window.addEventListener('load', function (event) {
    Start();
});
var prevScrollpos = window.pageYOffset;
window.addEventListener('scroll', function () {
    let currentScrollPos = window.pageYOffset;
    let header = document.querySelector('.container-banner > nav');

    if (window.scrollY > 0) {
        header.classList.add('pin-menu');
        document.querySelector('.background-menu').style.height = "60px";
    } else {
        header.classList.remove('pin-menu');
        document.querySelector('.background-menu').style.height = "0";
    }


    if (prevScrollpos> currentScrollPos) {
        header.style.top = "0";
    } else {
       header.style.top = "-60px";
    }
    prevScrollpos = currentScrollPos;

});

function Start(){
    let elemnts = document.querySelectorAll('.plans-button > a');
    let completePlan = document.querySelectorAll('.plans-complete');
    let menuButtons = document.querySelectorAll('.container-menu > ul > li > a');


    menuButtons[0].addEventListener('click', () => window.scrollTo({ top,  behavior: 'smooth' }));
    menuButtons[1].addEventListener('click', function () {
        document.querySelector('#resumoPlanos').scrollIntoView({ behavior: 'smooth' });
    });

    for (let i = 0; i < elemnts.length; i++) {
        elemnts[i].addEventListener('click', function () {
            completePlan[i].scrollIntoView({ behavior: 'smooth'});
        });
    }

}