$(".banner_slide").slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  arrow: true,
  dots: true,
  prevArrow: '<i class="fa-solid fa-chevron-left pre_arrow"></i>',
  nextArrow: '<i class="fa-solid fa-chevron-right next_arrow"></i>',
});
// ==========================Banner Slide End=========================
$(".sale_slide").slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: false,
  autoplaySpeed: 2000,
  arrow: true,
  dots: false,
  // prevArrow: true,
  nextArrow: '<i class="fa-solid fa-chevron-right next_arrow"></i>',
});
// ========================Sale Slide End===============================
