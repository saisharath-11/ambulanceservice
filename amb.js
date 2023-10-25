// Get references to the form and the confirmation message
const ambulanceForm = document.getElementById("ambulanceForm");
const confirmationMessage = document.getElementById("confirmationMessage");

// Add a submit event listener to the form
ambulanceForm.addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the form from submitting and reloading the page

    // Get the user's name and location from the form
    const name = document.getElementById("name").value;
    const location = document.getElementById("location").value;

    // Display a confirmation message with the user's name and location
    confirmationMessage.textContent = `Thank you, ${name}! An ambulance will be dispatched to ${location} shortly.`;

    // Clear the form fields
    ambulanceForm.reset();
});

