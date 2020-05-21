$(document).ready(function () {
  /* Scroll on buttons */
  $(".js--scroll-to-types").click(function () {
    $("html, body").animate(
      { scrollTop: $(".js--build-types").offset().top },
      1000
    );
  });
});