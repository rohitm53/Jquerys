// used for adding same event handler
$(function () {
  // .on("click", function())
  $("html").on("click keydown", logEvent);

  var index = 0;
  var images = [
    "images/laptop-mobile_small.jpg",
    "images/laptop-on-table_small.jpg",
    "images/people-office-group-team_small.jpg",
  ];

  var galleryImage = $(".gallery").find("img").first();
  galleryImage.on("click", swicthToNextImage);

  function swicthToNextImage() {
    index = (index + 1) % images.length;
    galleryImage.fadeOut(500, () => {
      galleryImage.attr("src", images[index]);
      galleryImage.fadeIn(500);
    });
  }
});

function logEvent(event) {
  console.log("Mouse was clicked or key was pressed");
}
