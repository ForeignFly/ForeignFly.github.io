$(function () {
  function setRem() {
    var clientWidth = $(window).width();
    var nowRem = (clientWidth / 640) * 100;
    if (parseInt(nowRem) <= 100) {
      $("html").css("font-size", parseInt(nowRem, 10) + "px");
    } else {
      $("html").css("font-size", 100 + "px");
    }
  }
  setRem();
  $(function () {
    var timer;
    $(window).bind("resize", function () {
      clearTimeout(timer);
      timer = setTimeout(function () {
        setRem();
      }, 100);
    });
  });
});
