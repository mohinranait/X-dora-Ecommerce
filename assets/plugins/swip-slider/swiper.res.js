

// Banner Selider js code
var swiper = new Swiper(".bannerSlider", {
    spaceBetween: 30,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});


// Fiture Category js code
var swiper = new Swiper(".fitureCategory", {
    slidesPerView: 7,
    spaceBetween: 20,
    autoplay: {
      delay: 2500,
    },
    slidesPerGroup: 1,
    loop: true,
    loopFillGroupWithBlank: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});


// Slider Proudct js code
var swiper = new Swiper(".productSlider", {
    slidesPerView: 5,
    autoplay: {
      delay: 2500,
    },
    slidesPerGroup: 1,
    loop: true,
    loopFillGroupWithBlank: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

