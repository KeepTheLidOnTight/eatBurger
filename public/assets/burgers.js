$("#burgBtn").click(function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();
    
    let newBurger = {
      burger_name: $("#").val().trim(),
      devoured: $("[burger_name=devoured]:checked").val().trim()
    };

    // Sending post request.
    
    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger
    }).then(
      function() {
        console.log("created new burger");
        // Reload the page to update list
        location.reload();
      }
    );
  });
