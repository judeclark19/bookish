$(function () {
    // connect with the create club form
    $(".club-create-form").on("submit", function (event) {
      event.preventDefault();
      // create a newClub variable to store the information
      newClub = {
        club_name: $("#new-club-input").val().trim(),
        book_name: $("#book-name-input").val().trim(),
      };
      console.log(newClub)
      if (!newClub.club_name || !newClub.book_name) {
        return;
      }
  
      console.log("New Club route to be hit!");
      console.log("newClub information: ", newClub);
  
      // Send POST request to create new user
      $.ajax("/api/create-new-club", {
        type: "POST",
        data: newClub,
      })
        .then(function (result) {
        //   window.location.replace("/active-clubs");
        console.log(result);
          console.log("Successfully sent POST request for new club");
        })
        .catch((err) => {
          if (err) throw err;
        });
    });
  });