history.scrollRestoration = "auto";

// goTo#
function goTo(params) {
    header = document.querySelector('header .inner');
    element = document.querySelector(params);
    window.scrollTo({
        top: window.pageYOffset + element.getBoundingClientRect().top - header.offsetHeight,
        behavior: 'auto'
    });
}

// 스크롤 인식
const spyEls = document.querySelectorAll('section.scroll-spy')
const controller = new ScrollMagic.Controller();
spyEls.forEach(spyEl => {
    new ScrollMagic.Scene({
        triggerElement: spyEl,
        triggerHook: 0.5
    }).setClassToggle(spyEl, 'show').addTo(controller);
})

// 탑버튼
const toTop = document.querySelector('#to-top');
const aboutEl = document.querySelector('#about')
window.addEventListener('scroll', function () {
    if (window.scrollY > 100) {
        toTop.style.opacity = 1;
        toTop.style.transform = 'translateX(0)';
        aboutEl.classList.add('show');
    } else {
        toTop.style.opacity = 0;
        toTop.style.transform = 'translateX(100px)';
        aboutEl.classList.remove('show');
    }
})

// 모바일 메뉴
const mobileButton = document.querySelector('.btn-hamburger');
const mobileMenu = document.querySelector('header');
const menuButtons = document.querySelectorAll('header nav li');
const body = document.querySelector('body');

mobileButton.addEventListener('click', function () {
    mobileMenu.classList.toggle('active');
    body.classList.toggle('scroll-lock');
})

menuButtons.forEach(menuButton => {
    menuButton.addEventListener('click', function () {
        mobileMenu.classList.remove('active');
        body.classList.remove('scroll-lock');
    })
});
