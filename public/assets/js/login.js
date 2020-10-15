$(function(){


// connect with the login route and capture user input
$(".login").on("submit", function(event){
    event.preventDefault();
    // create a loggedInUser variable to store the information
    loggedInUser = {
        email: $("#email-input").val().trim(),
        password: $("#password-input").val().trim()
    };

    
    if (!loggedInUser.email || !loggedInUser.password) {
        return;
      }
    
    console.log("You clicked the submit button @login page");
    console.log("login information: ", loggedInUser);
});

});

