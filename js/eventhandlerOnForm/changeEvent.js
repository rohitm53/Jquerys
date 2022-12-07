$(function () {
  // change event useful for input of type checkbox , radio button etc

  $("#checkbox").change(function () {
    var isChecked = $(this).is(":checked"); // .prop("checked")
    if (isChecked) {
      $(this).add("label[for='cb']").css("box-shadow", "0 0 4px #181");
    } else {
      $(this).add("label[for='cb']").css("box-shadow", "0 0 4px #811");
    }
  });

  // challenge
  $("#selection").change(function () {
    var text = $(this).find(":selected").text();
    alert("You have selected " + text);
  });
});
