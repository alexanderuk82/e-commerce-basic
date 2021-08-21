'use strict';

// Variables for pop up menu
const menu = document.querySelector('.header__menu__icon');
const close = document.querySelector('.menu-mobile__close');
const popUp = document.querySelector('.menu-mobile');

const openModal = function (e) {
  e.preventDefault();
  popUp.classList.remove('hidden');
  //   popUp, classList.add('visible');
};

const closeModal = function (e) {
  e.preventDefault();
  popUp.classList.add('hidden');
};

menu.addEventListener('click', openModal);
close.addEventListener('click', closeModal);

//slider OWL

$(document).ready(function () {
  $('.homeSlider').owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    // responsive: {
    //   0: {
    //     items: 1,
    //   },
    //   600: {
    //     items: 1,
    //   },
    //   1000: {
    //     items: 1,
    //   },
    // },
    items: 1,
    autoplayTimeout: 8000,
  });

  //Information
  $('.information').owlCarousel({
    items: 3,
    nav: false,
    dots: false,
    loop: true,
    autoplay: true,
    autoplayTimeout: 5000,
    responsive: {
      0: {
        items: 1,
      },
      576: {
        items: 2,
      },
      900: {
        items: 3,
        loop: false,
      },
    },
  });

  //Best sellers
  $('.best-seller__content').owlCarousel({
    items: 5,
    nav: false,
    loop: true,
    dots: true,
    margin: 20,
    autoplay: true,
    autoplayTimeout: 5000,
    responsive: {
      0: {
        items: 2,
      },
      768: {
        items: 3,
      },
      992: {
        items: 4,
        dots: false,
        nav: true,
      },
    },
  });
});
