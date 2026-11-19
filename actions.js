
// Get the RSVP form
var rsvpForm = document.getElementById("rsvpForm");

// Get the confirmation message area
var confirmationMessage = document.getElementById("confirmationMessage");

// Listen for form submission
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

    } else if (attendance === "No") {

        // Display a message and GIF if the guest cannot attend
        confirmationMessage.innerHTML =
            "<p>Oh no! We'll miss you at the GIF Gala! 💜</p>" +
            '<img src="https://media.giphy.com/media/JER2en0ZRiGUE/giphy.gif" alt="GIF reaction" class="confirmation-gif">';

    }

    // Make the confirmation message visible
    confirmationMessage.style.display = "block";

});

// Get the RSVP form
var rsvpForm = document.getElementById("rsvpForm");

// Get the confirmation message area
var confirmationMessage = document.getElementById("confirmationMessage");

// Listen for form submission
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

    } else if (attendance === "No") {

        // Display a message and GIF if the guest cannot attend
        confirmationMessage.innerHTML =
            "<p>Oh no! We'll miss you at the GIF Gala! 💜</p>" +
            '<img src="https://media.giphy.com/media/JER2en0ZRiGUE/giphy.gif" alt="GIF reaction" class="confirmation-gif">';

    }

    // Make the confirmation message visible
    confirmationMessage.style.display = "block";

});
