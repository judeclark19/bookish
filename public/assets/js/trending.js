// Dummy data
// ===============================================================================================================

const someBooks = [
  {
    id: 1,
    title: "First Title",
    author: "First Author",
    genre: "genre 1",
    year: 1972,
  },
  {
    id: 2,
    title: "Second Title",
    author: "Second Author",
    genre: "genre 2",
    year: 1887,
  },
  {
    id: 3,
    title: "Third Title",
    author: "Third Author",
    genre: "genre 3",
    year: 1927,
  },
  {
    id: 4,
    title: "Fourth Title",
    author: "Fourth Author",
    genre: "genre 4",
    year: 2008,
  },
  {
    id: 5,
    title: "Fifth Title",
    author: "Fifth Author",
    genre: "genre 5",
    year: 2020,
  },
  {
    id: 6,
    title: "Sixth Title",
    author: "Sixth Author",
    genre: "genre 6",
    year: 2010,
  },
];

$(document).ready(function () {
  someBooks.forEach((book) => {
    const bookCard = $("<div class='book-card columns'>");
    $("#trending-body-mat").append(bookCard);

    const bookInfoDiv = $("<div class='column book-info-div'>");
    const bookCoverImg = $("<img class='book-cover'>").attr(
      "src",
      "https://via.placeholder.com/450x720.png"
    );
    const bookTitle = $("<p class='book-title'>").text(book.title);
    const bookAuthor = $("<p class='book-author'>").text(book.author);
    const bookGenre = $("<p class='book-genre'>").text(book.genre);
    const bookYear = $("<p class='book-year'>").text(book.year);
    bookInfoDiv.append(
      bookCoverImg,
      bookTitle,
      bookAuthor,
      bookGenre,
      bookYear
    );

    const clubsReadingThis = $("<div class='column clubs-reading-this'>");

    allClubs.forEach((club) => {
      if (club.currentBookId === book.id) {
        // console.log(club.name);
        const clubName = $("<p>").text(club.name);
        clubsReadingThis.append(clubName);
      }
    });
    const createNewClubBtn = $("<button class='button'>").text(
      "Create New Club"
    );
    clubsReadingThis.append(createNewClubBtn);

    bookCard.append(bookInfoDiv, clubsReadingThis);
  });
});
