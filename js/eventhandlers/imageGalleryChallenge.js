$(function () {
  var galleryItems = $(".gallery").find("img");
  galleryItems.css("width", "33%").css("opacity", "0.7");

  galleryItems.on("mouseenter", function () {
    $(this).stop().fadeTo(500, 1);
  });

  galleryItems.on("mouseleave", function () {
    $(this).stop().fadeTo(500, 0.7);
  });

  galleryItems.on("click", function () {
    var source = $(this).attr("src");
    var image = $("<img>").attr("src", source).css("width", "100%");
    $(".lightbox").empty().append(image).stop().fadeIn();
  });

  $(".lightbox").on("click", function () {
    $(this).stop().fadeOut();
  });
});
