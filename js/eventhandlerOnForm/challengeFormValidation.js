$(function () {
  var form = $("#form");
  enableFastFeedback(form);

  $("#form").submit(function (event) {
    console.log("rohit");
    var name = $("#name").val();
    var password = $("#password").val();
    var message = $("#message").val();
    var checkbox = $("#checkbox").is(":checked");

    validateName(name, event);
    validatePassword(password, event);
    validateMessage(message, event);
    validateCheckbox(checkbox, event);
  });
});

function enableFastFeedback(formElement) {
  var nameInput = formElement.find("#name");
  var passwordInput = formElement.find("#password");
  var messageInput = formElement.find("#message");
  var checkboxInput = formElement.find("#checkbox");

  nameInput.blur(function (event) {
    var name = $(this).val();
    if (name.length < 2) {
      $(this).css({
        "box-shadow": "0 0 4px #811",
        border: "1px solid #600",
      });
    } else {
      $(this).css({
        "box-shadow": "0 0 4px #181",
        border: "1px solid #060",
      });
    }
  });

  passwordInput.blur(function () {
    var password = $(this).val();
    if (password.length < 5) {
      $(this).css({
        "box-shadow": "0 0 4px #811",
        border: "1px solid #060",
      });
    } else {
      $(this).css({
        "box-shadow": "0 0 4px #181",
        border: "1px solid #060",
      });
    }
  });

  messageInput.blur(function () {
    var message = $(this).val();
    if (message.length < 10) {
      $(this).css({
        "box-shadow": "0 0 4px #811",
        border: "1px solid #060",
      });
    } else {
      $(this).css({
        "box-shadow": "0 0 4px #181",
        border: "1px solid #060",
      });
    }
  });

  checkboxInput.change(function () {
    var ischecked = $(this).is(":checked");
    if (!ischecked) {
      $(this).add("label[for='cb']").css({
        "box-shadow": "0 0 4px #811",
        border: "1px solid #060",
      });
    } else {
      $(this).add("label[for='cb']").css({
        "box-shadow": "0 0 4px #181",
        border: "1px solid #060",
      });
    }
  });
}

function validateName(name, event) {
  if (name.length < 2) {
    $("#name-feedback").text("Please enter atleast two characters");
    event.preventDefault();
  } else {
    $("#name-feedback").text();
  }
}

function validatePassword(password, event) {
  if (password.length < 5) {
    $("#password-feedback").text("Passsword should have min 5 characters");
    event.preventDefault();
  } else {
    $("#password-feedback").text("");
  }
}

function validateMessage(message, event) {
  if (message.length < 10) {
    $("#message-feedback").text("Please enter 10 character in message");
    event.preventDefault();
  } else {
    $("#message-feedback").text();
  }
}

function validateCheckbox(checkbox, event) {
  if (!checkbox) {
    $("#checkbox-feedback").text("Please select the checkbox");
    event.preventDefault();
  } else {
    $("#checkbox-feedback").text();
  }
}
