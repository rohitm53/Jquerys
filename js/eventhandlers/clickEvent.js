$(function () {
  $("#btn-click").click(function (event) {
    console.log(event);
    alert("Button was clicked");
  });

  $(".red-box").click(() => {
    $(".red-box").fadeTo(500, 0.5);
  });

  $(".red-box").click();
});
