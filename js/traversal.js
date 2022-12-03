$(() => {
  // $("#list").find("li").css("background-color", "rgba(180, 180, 30, 0.8)");
  // $("#list").children("li").css("background-color", "rgba(180, 180, 30, 0.8)");
  // $("#list").parents("body").css("background-color", "rgba(180, 180, 30, 0.8)");
  // $("#list").parent().css("background-color", "rgba(180, 180, 30, 0.8)");
  // $("#list")
  // .siblings(":header")
  // .css("background-color", "rgba(180, 180, 30, 0.8)");
  // $("#list").next().css("background-color", "rgba(180, 180, 30, 0.8)");
  // $("#list").prev().css("background-color", "rgba(180, 180, 30, 0.8)");

  $(":header").next().css("background-color", "rgba(180, 180, 30, 0.8)");
  $("#input")
    .children(":password")
    .css("background-color", "rgba(180, 180, 30, 0.8)");
});
