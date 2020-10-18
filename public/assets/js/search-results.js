let tempBook = "tempbook before";

$(function () {
  $(document).on("click", ".create-club-by-book", function (event) {
    console.log("VALUE OF TEMPBOOK UPON LOAD OF S-R");
    console.log(tempBook);
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

    tempBook = this.dataset.title.trim();
    console.log("SEARCHRESULTS.JS");
    console.log(this.id);
    console.log(this.dataset.author);
    console.log(this.dataset.title.trim());
    console.log(this.dataset.year);
    console.log("NEW TEMP BOOK");
    console.log(tempBook);

    $.ajax("/api/book", {
      type: "POST",
      data: newBook,
    })
      .then(function (result) {
        console.log(result);
        console.log("Successfully sent POST request for new book");
      })
      .catch((err) => {
        if (err) throw err;
      });
    // window.location.replace("/create-new-club");
    // console.log(newTempBook);
    const renameMeToo = prompt("Name of new club?");
    let newClub = {
      club_name: renameMeToo,
      BookId: this.id,
    };
    console.log(
      `${renameMeToo} will begin reading ${this.dataset.title.trim()}`
    );
    console.log("new club:");
    console.log(newClub);

    $.ajax("/api/club", {
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
