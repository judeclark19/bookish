$(function () {
  $(document).on("click", ".create-club-by-book", function (event) {
    //   });

    //   $(".login-form").on("submit", function(event){
    // event.preventDefault();
    // create a loggedInUser variable to store the information
    let newBook = {
      goodReads: this.id,
      title: this.dataset.title.trim(),
      author: this.dataset.author,
      year: this.dataset.year,
    };
    console.log("SEARCHRESULTS.JS");
    console.log(this.id);
    console.log(this.dataset.author);
    console.log(this.dataset.title.trim());
    console.log(this.dataset.year);

    $.ajax("/api/book", {
      type: "POST",
      data: newBook,
    })
      .then(function (result) {
        // window.location.replace("/active-clubs");
        console.log(result);
        console.log("Successfully sent POST request for new book");
      })
      .catch((err) => {
        if (err) throw err;
      });
  });
});
