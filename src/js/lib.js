// MagnificPopup

$('.swiper-container').magnificPopup({
  delegate: 'a',
  type: 'image',
  tLoading: 'Загрузка изображения #%curr%...',
  gallery: {
    enabled: true,
    navigateByImgClick: true,
    preload: [0, 1],
  },
});