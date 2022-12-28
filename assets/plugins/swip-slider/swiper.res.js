

// Banner Selider js code
var swiper = new Swiper(".bannerSlider", {
    spaceBetween: 10,
    loop: true,
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
    breakpoints: {
        200:{
            slidesPerView: 3,
            spaceBetween: 5,
        },
        300:{
            slidesPerView: 3,
            spaceBetween: 5,
        },
        565:{
            slidesPerView: 4,
            spaceBetween: 5,
        },
        640: {
          slidesPerView: 4,
          spaceBetween: 10,
        },
        768: {
          slidesPerView: 5,
          spaceBetween: 10,
        },
        1024: {
          slidesPerView: 7,
          spaceBetween: 20,
        },
      },
    loopFillGroupWithBlank: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});


// Slider Proudct js code
var swiper = new Swiper(".productSlider", {
    slidesPerView: 5,
    spaceBetween: 0,
    autoplay: {
      delay: 2500,
    },
    slidesPerGroup: 1,
    loop: true,
    breakpoints: {
        200:{
            slidesPerView: 1,
            spaceBetween: 0,
        },
        320:{
            slidesPerView: 2,
            spaceBetween: 0,
        },
        565:{
            slidesPerView: 3,
            spaceBetween: 0,
        },
        640: {
          slidesPerView: 3,
          spaceBetween: 0,
        },
        768: {
          slidesPerView: 4,
          spaceBetween: 0,
        },
        1024: {
          slidesPerView: 6,
          spaceBetween: 0,
        },
      },
    loopFillGroupWithBlank: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});



// PRODUCT DETAILS PAGE SLIDER FOR MAIN PRODUCT IMAGE
var swiper = new Swiper(".mySwiper", {
    spaceBetween: 10,
    slidesPerView: 4,
    freeMode: true,
});
