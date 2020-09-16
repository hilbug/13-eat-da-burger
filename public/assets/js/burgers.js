// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
    // UPDATE burger to be devoured //
    $(".change-devoured").on("click", function(event) {
    const id = $(this).data("id");

    // Send the PUT request.
    $.ajax(`/api/burgers/${id}`, {
      type: "PUT",
      data: { devoured: 1 }
    }).then(
      function() {
        console.log(`changed devoured to true`);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  // ADD burger to database //
  $(".create-form").on("submit", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    const newBurger = {
      burger_name: $("#burg").val().trim(),
      devoured: 0
    };

    // Send the POST request.
    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger
    }).then(
      function() {
        console.log("created new burger");
        
        // Display message to the user when burger is added and reload page after two seconds
        const yayDiv = $("<p>").addClass("font-weight-light font-italic").css("display", "block").text("Your burger has been added!");
        $(".create-form").append(yayDiv);

        setTimeout(function () {
          location.reload();
      }, 2000);
      }
    );
  });

  // DELETE burger from database //
  $(".delete-burger").on("click", function(event) {
    const id = $(this).data("id");

    // Send the DELETE request.
    $.ajax(`/api/burgers/${id}`, {
      type: "DELETE"
    }).then(
      function() {
        console.log(`deleted burger ${id}`);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });
});