$("#submit").click(function () {
    event.preventDefault();


    // Here we grab the form elements
    var newFriend = {
        name: "kitty",
        photo: "",
        scores:[1,2,3,4,5,4,3,2,3,5]
    };

    console.log(newReservation);

    // This line is the magic. It"s very similar to the standard ajax function we used.
    // Essentially we give it a URL, we give it the object we want to send, then we have a "callback".
    // The callback is the response of the server. In our case, we set up code in api-routes that "returns" true or false
    // depending on if a tables is available or not.

    $.post("/api/friends", newFriend,
        function (data) {
            console.log("I posted friends")
        });
    });
