let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('open');
}

window.onscroll = () => {
    menu.classList.remove('fa-times');
    navbar.classList.remove('open');
}

const sr = ScrollReveal ({
    origin: 'top',
    distance: '80px',
    duration: 2000,
    delay: 450,
    reset: true
});

sr.reveal('.hero-text', {delay: 200, origin:'top'});
sr.reveal('.hero-img', {delay: 400, origin:'right'});
sr.reveal('.icons', {delay:500, origin:'left'});
sr.reveal('.scroll-down', {dealy:500, origin:'right'});