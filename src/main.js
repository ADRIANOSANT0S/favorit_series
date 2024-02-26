const menu = document.querySelector(".menu__hamburger");

const nav = document.querySelector(".header__nav");

menu.addEventListener('click', function() {
    nav.classList.toggle('header__nav--is-active');
    console.log('Thank you my God')
})
