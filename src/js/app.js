// burger menu

const iconMenu = document.querySelector('.menu__icon');
const menuBody = document.querySelector('.header__menu');
const sub_buttons = document.querySelectorAll('.menu__button-arrow');
const menuItems = document.querySelectorAll('.menu__link');
// const bg_shadow = document.querySelector('.background__shadow');

if (iconMenu) {
    iconMenu.addEventListener('click', function (e) {
        document.body.classList.toggle('_lock');
        iconMenu.classList.toggle('_active');
        menuBody.classList.toggle('_active');
        // bg_shadow.classList.toggle('_active');
    })
}

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

// if (bg_shadow) {
//     bg_shadow.addEventListener('click', function (e) {
//         document.body.classList.remove('_lock');
//         iconMenu.classList.remove('_active');
//         menuBody.classList.remove('_active');
//         bg_shadow.classList.remove('_active');
//     })
// }

if (sub_buttons.length > 0) {
    sub_buttons.forEach(element => {
        element.addEventListener('click', function () {
            element.classList.toggle('_active');
            element.nextElementSibling.classList.toggle('_active');
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
        768: {
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

const swiper = new Swiper(".product-info-slider__mySwiper", {

    spaceBetween: 10,
    freeMode: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".product-info-slider__swiper-button-next",
        prevEl: ".product-info-slider__swiper-button-prev",
    },
    breakpoints: {
        // when window width is >= 320px
        0: {
            slidesPerView: 1
        },
        768: {
            slidesPerView: 2
        },
        992: {
            slidesPerView: 3
        }
    },
});