$('.menu-btn').on('click', function(e) {
    e.preventDefault();
    $(this).toggleClass('menu-btn_active');
    $('.menu-nav').toggleClass('menu-nav_active');
    $('.item').toggleClass('item_active');
  });

$(function(){
  $('.slider').slick({
  dots: true,
  slidesToShow: 1,
  slidesToScroll: 1,
 });
});

$(function(){
  $('.slider2').slick({
  dots: true,
  slidesToShow: 1,
  slidesToScroll: 1,
 });
});


