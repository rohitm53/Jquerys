$(function () {
  //:hover
  $("#btn-hover").hover(function (event) {
    alert("Button was hovered");
  });

  var greenBox = $(".green-box");

  greenBox.hover(function () {
    greenBox.text("I was hovered");
  });
});
