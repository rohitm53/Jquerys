$(function () {
  $("#form").submit(function (event) {
    var textarea = $("#textarea");
    if (textarea.val().trim() == "") {
      textarea.css("box-shadow", "0 0 4px #811");
      event.preventDefault();
    } else {
      // form will be submitted
    }
  });
});
