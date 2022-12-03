$(() => {
  //attr() , prop() , val()
  // var specialLink = $("#special-link");
  // console.log(specialLink.attr("href"));
  // specialLink.attr("href", "http://www.google.com");
  // console.log(specialLink.attr("href"));
  // var checkbox = $("input:checkbox");
  // console.log(checkbox.prop("checked"));
  // console.log(checkbox.attr("checked"));

  var textInput = $("input:text");
  textInput.val("Rohit Manohar");
  console.log(textInput.val());

  var rangeInput = $("input[type='range']");
  console.log(rangeInput.val());
});
