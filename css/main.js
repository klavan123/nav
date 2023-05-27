let menu = document.querySelector('menu');
let nav = document.querySelector('.navbar');
menu.onclick = () => {
    menu.classList.toggle('.hamburger');
    nav.classList.toggle('.navbar');
}