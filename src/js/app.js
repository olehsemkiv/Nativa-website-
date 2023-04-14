// import * as flsFunctions from "./modules/functions.js";

// flsFunctions.isWebp();

// import Swiper, {
//     Navigation,
//     Pagination
// } from 'swiper';

// const swiper = new Swiper();


// burger menu

const iconMenu = document.querySelector('.menu__icon');
const menuBody = document.querySelector('.header__menu');
if (iconMenu) {
    iconMenu.addEventListener('click', function (e) {
        document.body.classList.toggle('_lock');
        iconMenu.classList.toggle('_active');
        menuBody.classList.toggle('_active');
    })
}

const menuItems = document.querySelectorAll('.menu__link');

if (menuItems.length > 0) {
    menuItems.forEach(menuItem => {
        menuItem.addEventListener('click', function (e) {
            if (iconMenu.classList.contains('_active')) {
                document.body.classList.remove('_lock');
                iconMenu.classList.remove('_active');
                menuBody.classList.remove('_active');
            }
        })
    })
}


const swiper_front = new Swiper(".front__mySwiper", {
    pagination: {
        el: ".front__swiper-pagination",
    },
});


const swiper_second = new Swiper(".second__mySwiper", {
   
    
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        // when window width is >= 320px
        0: {
            slidesPerView: "auto",
            spaceBetween: 20,
        },
        600: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        992: {
            slidesPerView: 3,
            spaceBetween: 20
        },
    },

    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});

