new Swiper('.swiper-container', {
    navigation : {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },
  
    grabCursor: true,
    loop: true,
    touchAngle: 45,

    // effect: 'flip',
    // flipEffect: {
    //     slideShadows: true,
    //     limitRotation: true
    // },

    // effect: 'cube',
    // cubeEffect: {
    //     slideShadows: true,
    //     shadow: true,
    //     shadowOffset: 20,
    //     shadowScale: 0.90
    // },

    // effect: 'coverflow',
    // coverflowEffect: {
    //     rotate: 70,
    //     stretch: 60,
    //     slideShadows: true,
    //     scale: 0.8,
    //     modifier: 2
    // },

    effect: 'cards',
    cardsEffect: {
        perSlideOffset: 1,
        perSlideRotate: 2,
        rotate: true,
        slideShadows: true
    },

    // effect: 'creative',
    // creativeEffect: {
    //     next: {
    //         opacity: 0,
    //         scale: 5,
    //         shadow: true,
    //       },
    //     prev: {
    //         opacity: 0,
    //         scale: 1.5,
    //         shadow: true,
    //       },
    // }
});

gsap.to(".b-Next", {x:20, repeat:-1, duration: 0.5, ease: Power0.easeNone, yoyo: true});
gsap.from(".b-Prev", {x:20, repeat:-1, duration: 0.5, ease: Power0.easeNone, yoyo: true});