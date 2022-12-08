$(function () {
  // $.load()

  $("#code").load("js/script.js");

  $("#code").load("js/script.js", function (response, status) {
    if (status == "error") {
      alert("Could not find idontexists.php");
    }
    console.log(response);
  });
});
