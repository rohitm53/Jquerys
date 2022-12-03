$(function () {
  $(".gallery").css("display", "none"); //.hide()

  var redBox = $(".red-box");
  console.log(redBox.css("width"));
  console.log(redBox.width());
  console.log(redBox.height());

  redBox.css("background-color", "#AA7700");
  $("p").css("font-size", "20px");
  redBox.css("width", "+=20px");

  var properties = $("p").css(["font-size", "line-height", "color"]);
  console.log(properties);

  redBox.css("user-select", "none");
});
