setTimeout(() => {
    new Swiper("#banner-swiper", {
        // direction: "vertical",
        // effect: "fade",
        loop: true,
       
        autoplay: true,
        speed: 4000,
        pagination: {
            el: "#banner-swiper .swiper-pagination",
            clickable: true,
        },
    });
    new Swiper(".banner-swiper1", {
        // direction: "vertical",
        // effect: "fade",
        loop: true,
        navigation: {
            nextEl: ".banner-swiper1 .swiper-button-next",
            prevEl: ".banner-swiper1 .swiper-button-prev",
        },
        autoplay: true,
        speed: 2000,
        pagination: {
            el: ".banner-swiper1 .swiper-pagination",
            clickable: true,
        },
    });
    new Swiper("#last-swiper", {
        // direction: "vertical",
        // effect: "fade",
        loop: true,
        navigation: {
            nextEl: "#last-swiper .swiper-button-next",
            prevEl: "#last-swiper .swiper-button-prev",
        },
        autoplay: true,
        speed: 4000,
        pagination: {
            el: "#last-swiper .swiper-pagination",
            clickable: true,
        },
    });
}, 8000);

