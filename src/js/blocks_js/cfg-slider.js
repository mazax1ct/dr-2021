//переключение табов форм-фактор/fps в играх
$(document).on('click', '.js-tab-changer', function () {
  var el = $(this);
  $('.js-tab-changer').removeClass('is-active');
  el.addClass('is-active');

  $('.selection__tab.is-active').animate({
    opacity: 0
  }, 400, function() {
    $('.selection__tab.is-active').removeClass('is-active');
    $('.selection__tab[data-target='+el.attr('data-target')+']').addClass('is-active');
    if($('body').width() < 1200) {
      $('.js-cfg-slider').slick('setPosition');
    }
    $('.selection__tab[data-target='+el.attr('data-target')+']').animate({
      opacity: 1
    }, 400);
  });

  return false;
});

$(document).ready(function() {
  if($('body').width() < 1200) {
    //слайдер конфигураций
    if($('.js-cfg-slider').length) {
      $('.js-cfg-slider').slick({
        infinite: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        arrows: true,
        prevArrow: '<button class="slick-arrow slick-prev" aria-label="Назад" type="button"><svg class="slick-arrow__arrow" aria-hidden="true"><use xlink:href="#cfg_slider_prev"/></svg></button>',
        nextArrow: '<button class="slick-arrow slick-next" aria-label="Вперед" type="button"><svg class="slick-arrow__arrow" aria-hidden="true"><use xlink:href="#cfg_slider_next"/></svg></button>',
        mobileFirst: true,
        responsive: [
          {
            breakpoint: 1023,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2
            }
          },
          {
            breakpoint: 1899,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 4
            }
          }
        ]
      });
    }
  }
});
