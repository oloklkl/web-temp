//비주얼배너
const mainBanner = () => {
    const swiper = new Swiper('.myVisual', {
        pagination: {
            el: '.swiper-pagination',
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });
};
//이벤트배너
const eventBanner = () => {
    const swiper = new Swiper('.myEvent', {
        pagination: {
            el: '.swiper-pagination',
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });
};
//탭
const tabBar = () => {};

//gsap
const gsapAni = () => {
    const tl = gsap.timeline({ onUpdate: updatePercentage });
    const tl2 = gsap.timeline();
    const controller = new ScrollMagic.Controller();

    tl.from('.main .con3 .ani1 strong', {
        x: 200,
        opacity: 0,
        duration: 0.5,
    })
        .from(
            '.main .con3 .ani1 strong span',
            {
                width: 0,
                duration: 1,
            },
            '-=0.5'
        )
        .from(
            '.main .con3 .ani1 .img1',
            {
                x: -200,
                opacity: 0,
                duration: 1,
            },
            '-=1'
        )
        .from(
            '.main .con3 .ani1 .img2',
            {
                x: 200,
                opacity: 0,
                duration: 1,
            },
            '-=0.7'
        );

    tl2.from('.main .con3 .ani1 .box', {
        opacity: 0,
        scale: 0,
        duration: 1,
    }).to('.main .con3 .ani1 .box', {
        left: '30%',
        bottom: '28%',
        scale: 1.3,
        borderColor: '#fff',
        borderWidth: 10,
        boxShadow: '1px 1px 0px 0px rgba(0,0,0,0.09)',
        duration: 0.5,
    });

    const scene = new ScrollMagic.Scene({
        triggerElement: '.main .con3 .ani1',
        triggerHook: 'onLeave',
        duration: '100%',
    })
        .setPin('.main .con3 .ani1')
        .setTween(tl)
        .addTo(controller);

    const scene2 = new ScrollMagic.Scene({
        triggerElement: '.main .con3 .ani1 strong',
    })
        .setTween(tl2)
        .addTo(controller);

    function updatePercentage() {
        tl.progress();
    }
};

//합치기
const mainInit = () => {
    mainBanner();
    eventBanner();
    tabBar();
    gsapAni();
};

(() => {
    mainInit();
})();
