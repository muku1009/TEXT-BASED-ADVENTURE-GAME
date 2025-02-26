// Function to open the instructions popup
function openInstructions() {
    document.getElementById('popupOverlay').style.display = 'flex'; // Show the popup
}

// Function to close the instructions popup
function closeInstructions() {
    document.getElementById('popupOverlay').style.display = 'none'; // Hide the popup
}

// Enable the Start button when the checkbox is checked
document.addEventListener('DOMContentLoaded', function() {
    const agreeCheckbox = document.getElementById('agreeCheckbox');
    const startButton = document.getElementById('startButton');

    // Initially disable the start button if the checkbox is not checked
    startButton.disabled = !agreeCheckbox.checked;

    // Listen for changes to the checkbox state
    agreeCheckbox.addEventListener('change', function() {
        startButton.disabled = !this.checked; // Enable/disable the button based on checkbox state
    });
});

// Function to start the game and redirect to the game page
function startGame() {
    closeInstructions(); // Close the instructions popup

    // Get the URL from the data attribute
    const gameUrl = document.getElementById('startButton').getAttribute('data-url');
    
    // Check if the URL exists before redirecting
    if (gameUrl) {
        window.location.href = gameUrl; // Redirect using the URL from the data attribute
    } else {
        console.error("Game URL not found!");
    }
}
