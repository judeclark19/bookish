let tempBook = "tempbook before";
let newClub = "newclub before";
let bookId = "bookId before";

$(function () {
  $(document).on("click", ".create-club-by-book", function (event) {
    console.log("VALUE OF TEMPBOOK UPON LOAD OF S-R");
    // console.log(this);
    //   });

    //   $(".login-form").on("submit", function(event){
    // event.preventDefault();
    // create a loggedInUser variable to store the information
    let newBook = {
      goodReads: this.id,
      image: this.dataset.image,
      title: this.dataset.title.trim(),
      author: this.dataset.author,
      year: this.dataset.year,
    };

    // console.log(newBook);
    bookId = this.id;
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
        console.log("result ", result);
        console.log("Successfully sent POST request for new book");
        createClub(result);
      })
      .catch((err) => {
        console.log(err.message);
      });
    // window.location.replace("/create-new-club");
    // console.log(newTempBook);
  });

  function createClub(result) {
    console.log(result);
    const renameMeToo = prompt("Name of new club?");
    newClub = {
      club_name: renameMeToo,
      BookId: result.goodReads,
      book_name: result.title,
      book_image: result.image
    };
    // console.log(
    //   `${renameMeToo} will begin reading ${this.dataset.title.trim()}`
    // );
    console.log("new club:");
    console.log(newClub);
    $.ajax("/api/club", {
      type: "POST",
      data: newClub,
    })
      .then(function (data) {
        console.log(data);
        console.log("Club successfully created");
      })
      .catch((err) => {
        console.log(err.message);
      });
  }
  //   });
});
