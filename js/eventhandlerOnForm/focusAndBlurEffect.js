$(function () {
  // focus and blur effect only applicable to text related input fields
  var inputFields = $("input:text, input:password, textarea");

  //   inputFields.focus(function () {
  //     $(this).css("box-shadow", "0 0 4px #666");
  //   });

  //   inputFields.blur(function () {
  //     $(this).css("box-shadow", "none");
  //   });

  // challenge

  inputFields.blur(function () {
    var val = $(this).val();
    if (val.length < 3) {
      $(this).css("box-shadow", "0 0 4px #811");
    } else {
      $(this).css("box-shadow", "0 0 4px #181");
    }
  });
});
