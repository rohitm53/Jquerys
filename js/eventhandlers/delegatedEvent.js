$(function () {
  //   $("p").on("click", function () {
  //     $(this).slideUp();
  //   });

  //   $("#content").append("<p>This is dynamically added paragraph.</p>");

  $("#content").on("click", "p", function () {
    $(this).slideUp();
  });

  $("#content").append("<p>This p tag text is dynamically added</p>");

  // challenge
  $("body").on("mouseenter", "li", function () {
    $(this).css("color", "#666");
  });
  $("body").on("mouseleave", "li", function () {
    $(this).css("color", "#000");
  });
});
