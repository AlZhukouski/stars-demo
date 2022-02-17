$(document).ready(function () {

  // Add smooth scrolling to all links
  $(".reviews__slider").slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    centerMode: true,
    draggable: false,
    speed: 400,
    centerPadding: '0px',
    dots: false,
    arrows: false,
    asNavFor: '.reviews__phone-slider',
    focusOnSelect: true,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
        },
      },
    ],
  });


  $(".reviews__phone-slider").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    draggable: false,
    speed: 400,
    dots: false,
    arrows: false,
    asNavFor: '.reviews__slider',
  });

  $('.reviews__phone-slider-btn--left').click(function () {
    $('.reviews__phone-slider').slick('slickPrev');
  });
  $('.reviews__phone-slider-btn--right').click(function () {
    $('.reviews__phone-slider').slick('slickNext');
  });

  const sb = new ScrollBooster({
    viewport: document.querySelector('.roadmap__wrap'),
    scrollMode: 'transform',
    direction: "horizontal",
    pointerMode: "all",
    bounce: 'false',
  });

  let roadmapWidth = $('.roadmap__flex').width(),
    currentWidth = 0;

  setTimeout(function () {
    roadmapWidth = $('.roadmap__flex').width();
  }, 5000)

  let timerId = setInterval( function () {
    if(currentWidth < roadmapWidth) {
      currentWidth+= 0.05;
      sb.scrollTo({ x: currentWidth, y: 0 });
    } else {
      sb.scrollTo({ x: 0, y: 0 });
      currentWidth = 0;
    }
  }, 1);

  $('.roadmap__flex').click(function () {
    clearTimeout(timerId);
    sb.updateOptions({ bounce: true });
  })
  $('.roadmap__flex').bind('touchstart', function () {
    clearTimeout(timerId);
    sb.updateOptions({ bounce: true });
  })


  $('.header__hamburger-wrap').click(function (){
    $(this).toggleClass('active');
    $('.mob-menu').toggleClass('active');
  })

  $('.nav__item').click(function (){
    $('.header__hamburger-wrap').removeClass('active');
    $('.mob-menu').removeClass('active');
  })

  $('.mob-menu__close-btn-wrap').click(function (){
    $('.header__hamburger-wrap').removeClass('active');
    $('.mob-menu').removeClass('active');
  })

});
