$(function () {
  var blueBox = $(".blue-box");

  // blueBox.mouseenter(function () {
  //   blueBox.stop().fadeTo(500, 0.7);
  // });

  // blueBox.mouseleave(function () {
  //   blueBox.stop().fadeTo(500, 1);
  // });

  // hover(mouseInHandler , mouseOutHandler)
  blueBox.hover(
    function () {
      $(this).stop().fadeTo(500, 0.7);
    },
    function () {
      $(this).stop().fadeTo(500, 1);
    }
  );
});
