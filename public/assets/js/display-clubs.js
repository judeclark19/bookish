// Dummy data
// ===============================================================================================================

const allClubs = [
  {
    id: 1,
    name: "Outdoorsy Club",
    currentBookTitle: "Call of the Wild",
    currentBookId: 1,
    progress: 25,
    members: 8,
    active: true,
  },
  {
    id: 2,
    name: "Tiny Fey Lovers",
    currentBookTitle: "Bossypants",
    currentBookId: 1,
    progress: 42,
    members: 6,
    active: true,
  },
  {
    id: 3,
    name: "Scotland Yard",
    currentBookTitle: "The Sign of Four",
    currentBookId: 2,
    progress: 66,
    members: 10,
    active: true,
  },
  {
    id: 4,
    name: "Romance Novels Club",
    currentBookTitle: "Troubles in Paradise",
    currentBookId: 2,
    progress: 6,
    members: 5,
    active: true,
  },
  {
    id: 5,
    name: "Self Help Club",
    currentBookTitle: "Self Help Book",
    currentBookId: 3,
    progress: 41,
    members: 10,
    active: false,
  },
  {
    id: 6,
    name: "Science Fiction",
    currentBookTitle: "Dune",
    currentBookId: 4,
    progress: 61,
    members: 10,
    active: true,
  },
  {
    id: 7,
    name: "Comedy Club",
    currentBookTitle: "Me Talk Pretty One Day",
    currentBookId: 5,
    progress: 88,
    members: 7,
    active: true,
  },
  {
    id: 8,
    name: "History Club",
    currentBookTitle: "Hamilton",
    currentBookId: 5,
    progress: 100,
    members: 8,
    active: false,
  },
];

$(document).ready(function () {
  //   var br = document.createElement("br");

  allClubs.forEach((club) => {
    if (club.active) {
      const clubCard = $("<div class='club-card columns'>");
      $("#clubs-body-mat").append(clubCard);

      const bookInfoDiv = $("<div class='column is-one-fourth book-info-div'>");
      const bookCoverImg = $("<img class='book-cover'>").attr(
        "src",
        "https://via.placeholder.com/450x720.png"
      );
      const bookDataTemp = $("<p>").text(
        "Title, author, genre, year etc will go here"
      );
      bookInfoDiv.append(bookCoverImg, bookDataTemp);

      const clubInfoDiv = $("<div class='column club-info-div'>");
      const clubName = $("<p class='club-name'>").text(club.name);
      const progressBarLabel = $("<p class='progress-bar-label'>").text(
        "Progress bar label idk"
      );
      const progressBar = $("<progress class='progress' max='100'>").attr(
        "value",
        club.progress
      );
      clubInfoDiv.append(clubName, progressBarLabel, progressBar);

      const joinClubDiv = $("<div class='column is-one-fifth join-club-div'>");
      const joinClubButton = $("<button class='button'>").text("Join Club");
      const clubFullMsg = $("<p class='club-full-msg'>").text("Club FULL");
      const clubInactiveMsg = $("<p class='club-inactive-msg'>").text(
        "This club is inactive"
      );
      if (club.active && club.members < 10) {
        joinClubDiv.append(joinClubButton);
      } else if (club.active && club.members >= 10) {
        joinClubDiv.append(clubFullMsg);
      } else {
        joinClubDiv.append(clubInactiveMsg);
      }

      clubCard.append(bookInfoDiv, clubInfoDiv, joinClubDiv);
      $("#club-card-container").append(clubCard);
    }
  });
});
