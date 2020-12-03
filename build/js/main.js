"use strict";

/* Form  */
function checkParams() {
  var code = $('#code').val();
  var name = $('#name').val();
  var phone = $('#phone').val();

  if (code.length != 5 && name.length != 0 && phone.length != 0) {
    $('#submit').removeAttr('disabled');
  } else {
    $('#submit').attr('disabled', 'disabled');
  }
}

var mainSwiper = new Swiper('.swiper-container', {
  direction: 'horizontal',
  // spaceBetween: 32,
  // slidesPerView: 3,
  breakpoints: {
    100: {
      // width: 200,
      slidesPerView: 1
    },
    300: {
      // width: 200,
      slidesPerView: 1
    },
    768: {
      spaceBetween: 32,
      slidesPerView: 3
    },
    1100: {
      spaceBetween: 32,
      slidesPerView: 3
    },
    1440: {
      spaceBetween: 32,
      slidesPerView: 3 // centeredSlides: true,

    },
    watchSlidesProgress: true,
    watchSlidesVisibility: true
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  },
  pagination: {
    el: '.swiper-pagination',
    type: 'custom',
    renderCustom: function renderCustom(swiper, current, total) {
      return (current + '').padStart(2, '') + ' / ' + (total + '').padStart(2, '');
    }
  }
}); // MagnificPopup

$('.swiper-container').magnificPopup({
  delegate: 'a',
  type: 'image',
  tLoading: 'Загрузка изображения #%curr%...',
  gallery: {
    enabled: true,
    navigateByImgClick: true,
    preload: [0, 1]
  }
});