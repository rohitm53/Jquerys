// used for adding same event handler
$(function () {
  // .on("click", function())

  //   $("html").on("click keydown", function () {
  //     console.log("Mouse was clicked or key was pressed");
  //   });

  var index = 0;
  var images = [
    "images/laptop-mobile_small.jpg",
    "images/laptop-on-table_small.jpg",
    "images/people-office-group-team_small.jpg",
  ];

  var gallery = $(".gallery").find("img").first();
  gallery.on("click", () => {
    index = (index + 1) % images.length;
    gallery.fadeOut(function () {
      gallery.attr("src", images[index]);
      gallery.fadeIn();
    });
  });
});
