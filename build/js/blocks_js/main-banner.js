//слайдер главного баннера
if($('.js-main-banner').length) {
  $('.js-main-banner').slick({
    fade: true,
    adaptiveHeight: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    arrows: false,
    mobileFirst: true,
    responsive: [
      {
        breakpoint: 1599,
        settings: {
          arrows: true,
          prevArrow: '<button class="slick-arrow slick-prev" aria-label="Назад" type="button"><svg class="slick-arrow__arrow" aria-hidden="true"><use xlink:href="#slider_arrow_left"/></svg></button>',
          nextArrow: '<button class="slick-arrow slick-next" aria-label="Вперед" type="button"><svg class="slick-arrow__arrow" aria-hidden="true"><use xlink:href="#slider_arrow_right"/></svg></button>'
        }
      }
    ]
  });

  $('.js-main-banner').on('afterChange', function(slick, currentSlide) {
    $('.main-banner__slide-back').removeClass('animate');
    $('.main-banner__slide.slick-active .main-banner__slide-back').addClass('animate');
  });
}
