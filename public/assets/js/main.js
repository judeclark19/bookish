// Dummy data
// ===============================================================================================================
const allClubs = [
  {
    id: 1,
    name: "Outdoorsy Club",
    currentBookTitle: "Call of the Wild",
    members: 8,
    active: true,
  },
  {
    id: 2,
    name: "Tiny Fey Lovers",
    currentBookTitle: "Bossypants",
    members: 6,
    active: true,
  },
  {
    id: 3,
    name: "Scotland Yard",
    currentBookTitle: "The Sign of Four",
    members: 10,
    active: true,
  },
  {
    id: 4,
    name: "Romance Novels Club",
    currentBookTitle: "Troubles in Paradise",
    members: 5,
    active: true,
  },
  {
    id: 5,
    name: "Self Help Club",
    currentBookTitle: "Self Help Book",
    members: 10,
    active: false,
  },
  {
    id: 6,
    name: "Science Fiction",
    currentBookTitle: "Dune",
    members: 10,
    active: true,
  },
  {
    id: 7,
    name: "Comedy Club",
    currentBookTitle: "Me Talk Pretty One Day",
    members: 7,
    active: true,
  },
  {
    id: 8,
    name: "History Club",
    currentBookTitle: "Hamilton",
    members: 8,
    active: false,
  },
];

document.addEventListener("DOMContentLoaded", () => {
  $("#nav-search-btn").click(function () {
    console.log("clicked search button");
    window.location.replace("/search-results");
  });
  // hamburger toggle, code from Bulma
  // ===============================================================================================================
  // Get all "navbar-burger" elements
  const $navbarBurgers = Array.prototype.slice.call(
    document.querySelectorAll(".navbar-burger"),
    0
  );

  // Check if there are any navbar burgers
  if ($navbarBurgers.length > 0) {
    // Add a click event on each of them
    $navbarBurgers.forEach((el) => {
      el.addEventListener("click", () => {
        // Get the target from the "data-target" attribute
        const target = el.dataset.target;
        const $target = document.getElementById(target);

        // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
        el.classList.toggle("is-active");
        $target.classList.toggle("is-active");
      });
    });
  }
  // ===============================================================================================================
});
