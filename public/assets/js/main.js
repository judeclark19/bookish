let userSearchInput;

document.addEventListener("DOMContentLoaded", () => {
  $("#nav-search-btn").click(function () {
    console.log("clicked search button");

    userSearchInput = $("#newSearchValue").val();
    console.log(userSearchInput);

    // window.location.replace("/search-results");
  });

  $("#get-started-btn").click(function () {
    console.log("clicked get started button");
    window.location.replace("/signup");
  });

  $("#create-new-club-btn").click(function (event) {
    event.preventDefault();
    console.log("clicked create button");
    window.location.replace("/active-clubs");
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
