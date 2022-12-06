$(function () {
  $("#btn-click").click(
    {
      userName: "Rohit Manohar",
      age: 30,
    },
    function (event) {
      greetUser(event.data);
    }
  );

  function greetUser(userData) {
    var userName = userData.userName || "Default Name";
    var age = userData.age || 10;
    alert("Welcome back " + userName + "with age " + age + "!");
  }
});
