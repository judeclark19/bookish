$(function () {
  // connect with the create club form
  $(".create-club-by-book").on("click", function (event) {
    event.preventDefault();
    let newClubName = $(
      “<p>What would you like to name this club?</p>”
    ).prompt(() => {});
    console.log("Inputs:");
    console.log($("#new-club-input").val());
    console.log($("#book-name-input").val());
    if (!$("#new-club-input").val() || !$("#book-name-input").val()) {
      alert("Please enter valid information");
      return;
      // create a newClub variable to store the information
    } else {
      newClub = {
        club_name: $("#new-club-input").val().trim(),
        book_name: $("#book-name-input").val().trim(),
      };
      // console.log(newClub);
      console.log("New Club route to be hit!");
      console.log("newClub information: ", newClub);

      // Send POST request to create new club
      $.ajax("/api/create-new-club", {
        type: "POST",
        data: newClub,
      })
        .then(function (result) {
          window.location.replace("/active-clubs");
          console.log(result);
          console.log("Successfully sent POST request for new club");
        })
        .catch((err) => {
          if (err) throw err;
        });
    }
  });
});
