$(document).ready(function () {
  //Scroll
  $("a[href^='#']").click(function () {
    var _href = $(this).attr("href");
    $("html, body").animate({ scrollTop: $(_href).offset().top + "px" });
    return false;
  });

  //Masked
  $("input[name=phone]").mask("+7 (999) 999-99-99");
});
