$(function () {
  // connect with the create club form
  $(".create-club-by-book").on("click", function (event) {
    event.preventDefault();
    {
      let newClubName = $(
        "<p>What would you like to name this club?</p>"
      ).prompt(() => {});

      newClub = {
        club_name: $(newClubName).val().trim(),
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
