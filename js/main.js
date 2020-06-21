const actors = document.querySelector('#actors'),
    creators = document.querySelector('#creators'),
    cadrsActors = document.querySelector('.cadrs-actors'),
    cadrsCreators = document.querySelector('.cadrs-creators'),
    mobailButton = document.querySelector('.mobail-button'),
    menuButton = document.querySelector('.menu-button'),
    modal = document.querySelector('.modal'),
    header = document.querySelector('.header');

const openCreators = () => {
        actors.classList.remove('tabs-active');
        creators.classList.add('tabs-active');
        cadrsActors.classList.remove('is-active');
        cadrsCreators.classList.add('is-active');
    },
    openActors = () => {
        creators.classList.remove('tabs-active');
        actors.classList.add('tabs-active');
        cadrsCreators.classList.remove('is-active');
        cadrsActors.classList.add('is-active');
    },
    toggleModal = () => {
        modal.classList.toggle('modal-active');
        menuButton.classList.toggle('menu-button-active');
        header.classList.toggle('header-active');
    };

document.addEventListener('click', event => {
    event.preventDefault();
    if (event.target.closest('#actors')) {
        openActors();
    } else if (event.target.closest('#creators')) {
        openCreators();
    }
});

menuButton.addEventListener('click', toggleModal);

window.onload = function () {
    //initialize swiper when document ready
    let mySwiper = new Swiper('.swiper-container', {
        slidesPerView: 4,
        spaceBetween: 16,
        loop: true,
        breakpoints: {
            998: {
                slidesPerView: 4,
            },
            768: {
                slidesPerView: 2
            },
            320: {
                slidesPerView: 1,
                navigation: {
                    nextEl: '.button-next'
                }
            }
        }
    });
};