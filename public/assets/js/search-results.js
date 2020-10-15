$(function () {
  // connect with the search form to capture values on 'submit'
  $("#nav-search-btn").on("submit", function (event) {
    console.log("Clicked!");
    // create a newSearch
    newSearch = {
      name: $("#newSearchValue").val().trim(),
    };

    console.log("Search has been triggered");
    console.log("Search information: ", newSearch);

    // Send POST request to create new DOM
    $.ajax("/api/search-results", {
      type: "POST",
      data: newSearch,
    })
      .then(function () {
        window.location.replace("/");
        console.log("Successfully sent POST request");
      })
      .catch((err) => {
        if (err) throw err;
      });
  });
});
