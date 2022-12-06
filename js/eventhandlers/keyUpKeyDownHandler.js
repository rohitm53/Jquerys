$(function () {
  // keypress() - EVIL! as no documentation available
  //   $("html").on("keydown", function (event) {
  //     console.log(event.which);
  //   });

  var blueBox = $(".blue-box");
  $("html").on("keydown", function (event) {
    console.log(event.which);
    if (event.which === 39) {
      blueBox.css("margin-left", "+=10px");
    } else if (event.which === 37) {
      blueBox.css("margin-left", "-=10px");
    }
  });
});
