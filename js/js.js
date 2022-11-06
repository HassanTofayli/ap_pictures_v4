if(window.matchMedia( "(min-width: 770px)" ).matches)
    var swiper = new Swiper(".slide-content", {
    slidesPerView: 3,
    spaceBetween: 0,
    loop: true,
    centerSlide: 'true',
    gargCursor: 'true',
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});
else
    var swiper = new Swiper(".slide-content", {
        slidesPerView: 1,
        spaceBetween: 0,
        loop: true,
        centerSlide: 'true',
        gargCursor: 'true',
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });