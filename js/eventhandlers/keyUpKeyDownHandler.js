$(function () {
  // keypress() - EVIL! as no documentation available
  //   $("html").on("keydown", function (event) {
  //     console.log(event.which);
  //   });

  var ARROW_RIGHT = 39;
  var ARROW_LEFT = 37;

  var blueBox = $(".blue-box");
  $("html").on("keydown", function (event) {
    console.log(event.which);
    if (event.which === ARROW_RIGHT) {
      blueBox.stop().animate({
        marginLeft: "+=10px",
      });
    } else if (event.which === ARROW_LEFT) {
      blueBox.stop().animate({
        marginLeft: "-=10px",
      });
    }
  });
});
