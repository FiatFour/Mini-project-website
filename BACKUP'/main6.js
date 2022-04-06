let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}
window.onscroll = () => {
    menu.classList.remove('bx-x');
    navbar.classList.remove('active');
}

const sr = ScrollReveal ({
    distance: '60px',
    duration: 2500,
    delay: 400,
    reset: true
})

sr.reveal('.text',{delay: 200, origin: 'left'})
sr.reveal('.container',{delay: 200, origin: 'top'})
sr.reveal('.container2',{delay: 200, origin: 'top'})
sr.reveal('.container3',{delay: 200, origin: 'top'})
sr.reveal('.container4',{delay: 200, origin: 'top'})