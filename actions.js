
// Get the RSVP form
var rsvpForm = document.getElementById("rsvpForm");

// Get the confirmation message area
var confirmationMessage = document.getElementById("confirmationMessage");

// Listen for the form submission
rsvpForm.addEventListener("submit", function(event) {

    // Prevent the page from refreshing
    event.preventDefault();

    // Get the selected attendance option
    var attendance = document.getElementById("attendance").value;

    // Check if the guest is attending
    if (attendance === "Yes") {

        // Display a positive confirmation message
        confirmationMessage.textContent =
            "🎉🥳 Awesome! You're on the guest list! Get ready for an amazing GIF Gala!";

    } else {

        // Display a message if the guest cannot attend
        confirmationMessage.textContent =
            "Thank you for responding! We're sorry you can't make it. You'll be missed! 💜";

    }

    // Make the confirmation message visible
    confirmationMessage.style.display = "block";

});
