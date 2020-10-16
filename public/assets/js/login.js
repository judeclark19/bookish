$(function(){

// connect with the login route and capture user input
$(".login-form").on("submit", function(event){
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

    $.ajax("/api/login", {
        type: "POST",
        data: loggedInUser
    }).then(function(result){
        window.location.replace("/my-account");
        console.log("Succesfully logged in", loggedInUser);
        console.log(result);
        

    }).catch((err) =>{
        if(err) throw err;
        // location.reload();
    })
});

// create a post request -- see how to authenticate user information and continue to log in

});

