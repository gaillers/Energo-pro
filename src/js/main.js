let mainSwiper = new Swiper('.swiper-container', {
  direction: 'horizontal',
  // spaceBetween: 32,
  // slidesPerView: 3,

  breakpoints: {
    100: {
      // width: 200,
      slidesPerView: 1,
    },
    300: {
      // width: 200,
      slidesPerView: 1,
    },
    768: {
      spaceBetween: 32,
      slidesPerView: 3,
    },
    1100: {
      spaceBetween: 32,
      slidesPerView: 3,
    },
    1440: {
      spaceBetween: 32,
      slidesPerView: 3,
      // centeredSlides: true,
    },
    watchSlidesProgress: true,
    watchSlidesVisibility: true,
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  pagination: {
    el: '.swiper-pagination',
    type: 'custom',
    renderCustom: function (swiper, current, total) {
      return (
        (current + '').padStart(2, '') + ' / ' + (total + '').padStart(2, '')
      );
    },
  },
});
