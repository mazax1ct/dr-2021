function cfgFuncControlsScroll(elem) {
  var containerOuterWidth = elem.parent().outerWidth(); // узнаем ширину контейнера (width + padding)
  var itemOuterWidth = elem.outerWidth(); // узнаем ширину текущего элемента (width + padding)
  var itemOffsetLeft = elem.offset().left; // узнаем значение отступа слева в контейнере у текущего элемента
  var containerScrollLeft = elem.parent().scrollLeft(); // узнаем текущее значение скролла
  var positionCetner = (containerOuterWidth / 2 - itemOuterWidth / 2); // рассчитываем позицию центра
  var scrollLeftUpd = containerScrollLeft + itemOffsetLeft - positionCetner; // рассчитываем положение скролла относительно разницы отступа элемента и центра контейнера
  // анимируем
  elem.parent().animate({
    scrollLeft: scrollLeftUpd
  }, 400);
}

$(document).on('click', '.js-cfg-func-change', function () {
  cfgFuncControlsScroll($(this));
  $('.js-cfg-func-change').removeClass('is-active');
  $(this).addClass('is-active');
  var target = $(this).attr('data-target');
  var currentSlide = $('.cfg-func__slide.is-active');
  currentSlide.removeClass('visible');
  setTimeout(function() {
    currentSlide.removeClass('is-active');
    $('.cfg-func__slide[data-target='+ target +']').addClass('is-active');
    setTimeout(function() {
      $('.cfg-func__slide[data-target='+ target +']').addClass('visible');
    },300);
  },300);
  return false;
});
