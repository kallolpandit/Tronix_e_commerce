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
  prevArrow: false,
  nextArrow: '<i class="fa-solid fa-chevron-right next_arrow"></i>',
});
// ========================Sale Slide End===============================
$(".product_slide").slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  asNavFor: ".product_slide_sub",
});
$(".product_slide_sub").slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  asNavFor: ".product_slide",
  focusOnSelect: true,
  arrow: true,
  prevArrow: '<i class="fa-solid fa-chevron-left pre_arrow"></i>',
  nextArrow: '<i class="fa-solid fa-chevron-right next_arrow"></i>',
});

// ========================Product Slide End===============================
