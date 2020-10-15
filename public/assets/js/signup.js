
$(function(){

    // connect with the signup form to capture values on 'submit'
    $(".signup").on("submit", function(event){
        event.preventDefault();
        // create a newUser variable to store the information
        newUser = {
            email: $("#email-input").val().trim(),
            password: $("#password-input").val().trim()
        };
    
        if (!newUser.email || !newUser.password) {
            return;
          }
        
        console.log("New user sign up has been triggered");
        console.log("newUser information: ", newUser);

        
         // Send POST request to create new user
        $.ajax("/api/signup", {
            type: "POST",
            data: newUser
        }).then(function(){
            window.location.replace("/login");
            console.log("Successfully sent POST request");
        }).catch((err) =>{
            if (err) throw err;
        })
    });
    
    });