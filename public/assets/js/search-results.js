$(function () {
  $(document).on("click", ".create-club-by-book", function (event) {
    console.log("hello world ccbb");
    //   });

    //   $(".login-form").on("submit", function(event){
    // event.preventDefault();
    // create a loggedInUser variable to store the information
    thisBookGrId = this.id;
    console.log(thisBookGrId);
  });
});
