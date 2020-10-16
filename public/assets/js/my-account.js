$(function () {
  console.log("my acccount.js ready");
  $("#edit-username-btn").click(function () {
    $("#edit-username-btn").addClass("hidden");
    $("#save-username-btn").removeClass("hidden");
    $("#username-span").addClass("hidden");
    $("#edit-username-input").removeClass("hidden");
  });

  $("#save-username-btn").click(function () {
    $("#save-username-btn").addClass("hidden");
    $("#edit-username-btn").removeClass("hidden");
    $("#username-span").removeClass("hidden");
    $("#edit-username-input").addClass("hidden");
  });

  $("#edit-email-btn").click(function () {
    $("#edit-email-btn").addClass("hidden");
    $("#save-email-btn").removeClass("hidden");
    $("#email-span").addClass("hidden");
    $("#edit-email-input").removeClass("hidden");
  });

  $("#save-email-btn").click(function () {
    $("#save-email-btn").addClass("hidden");
    $("#edit-email-btn").removeClass("hidden");
    $("#email-span").removeClass("hidden");
    $("#edit-email-input").addClass("hidden");
  });
  $("#edit-pw-btn").click(function () {
    $("#edit-pw-btn").addClass("hidden");
    $("#save-pw-btn").removeClass("hidden");
    $("#pw-span").addClass("hidden");
    $("#edit-pw-input").removeClass("hidden");
  });

  $("#save-pw-btn").click(function () {
    $("#save-pw-btn").addClass("hidden");
    $("#edit-pw-btn").removeClass("hidden");
    $("#pw-span").removeClass("hidden");
    $("#edit-pw-input").addClass("hidden");
  });
});
