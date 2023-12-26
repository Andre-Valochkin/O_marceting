$(document).ready(function () {
  $("#menu").on("click", "a", function (event) {
    //отменяем стандартную обработку нажатия по ссылке

    event.preventDefault();

    //забираем идентификатор бока с атрибута href

    const id = $(this).attr("href"),
      //узнаем высоту от начала страницы до блока на который ссылается якорь

      top = $(id).offset().top;

    //анимируем переход на расстояние - top за 1500 мс

    $("body,html").animate({ scrollTop: top }, 500);
  });
  $(function () {
    let mixer = mixitup(".portfolio__galeri");
  });
  $("[data-fancybox]").fancybox({
    toolbar: false,
    smallBtn: true,
    iframe: {
      preload: false,
    },
  });
  $(function () {
    $(".slider-section").slick({
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      dots: true,
      infinite: true,
    });
  });
});
