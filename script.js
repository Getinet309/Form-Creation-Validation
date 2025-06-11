// Wrap the entire script in a DOMContentLoaded event listener
// This ensures that the JavaScript runs only after the entire HTML document has been loaded and parsed.
window.addEventListener('DOMContentLoaded', function() {
    // Select the form element by its ID
    // Store this reference in a constant named 'form'
    const form = document.getElementById('registration-form');

    // Select the division where feedback will be displayed by its ID
    // Store this reference in a constant named 'feedbackDiv'
    const feedbackDiv = document.getElementById('form-feedback');

    // Add an event listener to the form for the 'submit' event
    // Use an anonymous function to handle the event.
    form.addEventListener('submit', function(event) {
        // Prevent the default form submission behavior
        // This is crucial for client-side validation to take over
        event.preventDefault();

        // Retrieve the input fields by their IDs
        const usernameInput = document.getElementById('username');
        const emailInput = document.getElementById('email');
        const passwordInput = document.getElementById('password');

        // Retrieve the .value property for each input and apply the .trim() method
        // This removes any leading or trailing whitespace from the input values.
        const username = usernameInput.value.trim();
        const email = emailInput.value.trim();
        const password = passwordInput.value.trim();

        // Initialize a variable to track the overall validation status
        // Set it to true initially, and change to false if any validation fails.
        let isValid = true;

        // Declare an array named 'messages' to store all validation error messages.
        let messages = [];

        // --- Username Validation ---
        // Check if the username's length is less than 3 characters.
        if (username.length < 3) {
            isValid = false; // Set isValid to false as validation failed
            messages.push('Username must be at least 3 characters long.'); // Add specific error message
        }

        // --- Email Validation ---
        // Check if the email includes both '@' and '.' characters.
        // This is a basic check; more robust email validation might use regular expressions.
        if (!email.includes('@') || !email.includes('.')) {
            isValid = false; // Set isValid to false as validation failed
            messages.push('Please enter a valid email address (must contain @ and .).'); // Add corresponding error message
        }

        // --- Password Validation ---
        // Ensure the password's length is at least 8 characters.
        if (password.length < 8) {
            isValid = false; // Set isValid to false as validation failed
            messages.push('Password must be at least 8 characters long.'); // Add appropriate error message
        }

        // --- Displaying Feedback ---
        // Make the feedbackDiv visible by setting its style.display to "block".
        feedbackDiv.style.display = "block";

        // Check the final validation status
        if (isValid) {
            // If all validations pass, display a success message
            feedbackDiv.textContent = "Registration successful!"; // Set the text content
            feedbackDiv.style.color = "#28a745"; // Set text color to green for success
            feedbackDiv.style.backgroundColor = "#d4edda"; // Set background color for success
        } else {
            // If any validation fails, display the collected error messages
            // Join the messages array with '<br>' to form a single string, creating line breaks for each message.
            feedbackDiv.innerHTML = messages.join('<br>'); // Use innerHTML to render line breaks
            feedbackDiv.style.color = "#dc3545"; // Set text color to red for errors
            feedbackDiv.style.backgroundColor = "#ffbaba"; // Set background color for errors
        }
    });
});
