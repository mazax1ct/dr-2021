$(document).on('click', '.js-set-toggler', function () {
  $(this).toggleClass('is-active');
  $(this).prev('.set-item__list-block').slideToggle();
  return false;
});
