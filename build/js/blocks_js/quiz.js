function scrollCompensate () {
  if(document.body.scrollHeight > window.innerHeight) {
    var w = window.innerWidth - document.documentElement.clientWidth;
    $('head').append('<style id="quiz-scroll-compensate" type="text/css">.quiz-step__btn-next-block{padding-right:'+ w +'px;}</style>');
  }
}

$(document).on('click', '.js-quiz', function () {
  scrollCompensate();
  $.fancybox.open({
  	src  : '#quiz-popup',
  	type : 'inline',
  	opts : {
      autoFocus: false,
      touch: {
        vertical: false
      },
      afterClose : function( instance, current ) {
  			$('#quiz-scroll-compensate').remove();
  		}
  	}
  });
  return false;
});

$(document).on('click', '.js-quiz-step', function () {
  $('.quiz-step.is-active').removeClass('visible');
  var target = $(this).attr('data-step');
  setTimeout(function() {
    $('.quiz-step.is-active').removeClass('is-active');
    $('.quiz-step[data-step='+ target +']').addClass('is-active');
    $('.quiz-popup').animate({ scrollTop: 0 }, 'fast');
    setTimeout(function() {
      $('.quiz-step[data-step='+ target +']').addClass('visible');
    },300);
  },300);
  return false;
});
