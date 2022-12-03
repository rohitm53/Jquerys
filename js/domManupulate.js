$(() => {
  // $("ul ul:first").append("<li>I'm gonna be the last sub-item</li>");
  // $("ul ul").prepend("<li>I'm gonna be the first sub-item</li>");
  // $("<li>I'm gonna be the last sub-item</li>").appendTo($("ul ul:first"));
  // $("<li>I'm gonna be the last sub-item</li>").prependTo($("ul ul:last"));
  // $("<h4>Rohit Manohar</h4>").prependTo("#content");
  // $(".red-box").after("<div class='red-box'>Another Red After</div>");
  // $(".green-box").before("<div class='green-box'>Another Blue Before</div>");
  // $(".blue-box").before(() => {
  // return "<div class='blue-box'>Blue 2 funtion</div>";
  // });
  // $(".blue-box").before($(".red-box"));
  // $("p").after($("#list"));

  $(".red-box").after("<div class='red-box'>Another Red</div>");
  $(".green-box").after("<div class='green-box'>Another Green</div>");
  $(".blue-box").after("<div class='blue-box'>Another Blue</div>");
});
