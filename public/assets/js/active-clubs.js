$(function(){
    // connect with the 'join club' button on the active clubs page
    $(document).on("click", ".join-club-button", function(event){
        event.preventDefault();

        // grab the club info from the handlebars page on the event click
        let ClubId = { ClubId: this.dataset.id} 
        console.log("Clicked on the join club button for club ID:");
        console.log(ClubId);

        $.ajax("api/join-club", {
            type: "PUT",
            data: ClubId
        }).then(function(data){
            console.log("Successfully joined clicked club");

        }).catch((err) =>{
            if(err) throw err;
        })
    })
})