const container = document.querySelector("body")
const swiper1 = new Swiper('.swiper1', {
  slidesPerView: 1,
  speed: 2000,
  autoplay: true,
  effect: "fade",
  allowTouchMove: false,
  pagination: false,
  navigation: false,
});

const element = document.querySelector('select');
const choices = new Choices(element, {
  searchEnabled: false,
  itemSelectText: ' '
});

const swiper2 = new Swiper('.swiper2', {
  direction: 'horizontal',
  loop: true,
  slidesPerView: 1,
  slidesPerGroup: 1,
  observer: true,
  observeParents: true,
  observeSlideChildren: true,
  
  pagination: {
    el: '.swiper-pagination',
    type: 'fraction',
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },

  breakpoints: {

    320: {
      slidesPerView: 1,
      slidesPerGroup: 1,
    },

    768: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 38,
    },

    1024: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 34,
    },

    1440: {
      slidesPerView: 3,
      slidesPerGroup: 3,
      spaceBetween: 50,
}}

  });