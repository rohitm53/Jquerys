$(() => {
  // $("#list")
  //   .children("li")
  //   .filter(":even")
  //   .css("background-color", "rgba(180, 180, 30, 0.8)");

  // $("li")
  //   .filter((index) => {
  //     return index % 3 == 2;
  //   })
  //   .css("background-color", "rgba(180, 180, 30, 0.8)");

  // $("li").first().css("background-color", "rgba(180, 180, 30, 0.8)");
  // $("li").eq(4).css("background-color", "rgba(180, 180, 30, 0.8)");
  // $("li").eq(-3).css("background-color", "rgba(180, 180, 30, 0.8)");

  $("li")
    .not((index) => {
      return index % 2 == 0;
    })
    .css("background-color", "rgba(180, 180, 30, 0.8)");
});
