let currentStep = 0;

// Define possible answers
const answer_yes = ["Yes", "Y", "yes", "y"];
const answer_no = ["No", "N", "no", "n"];

// Get references to HTML elements
const storyText = document.getElementById("story-text");
const questionText = document.getElementById("question-text");
const yesButton = document.getElementById("yes-button");
const noButton = document.getElementById("no-button");
const buttonContainer = document.getElementById("button-container");

// Function to start the game
function startGame() {
  storyText.textContent = "One day you are all alone at home sleeping soundly at midnight.\nSuddenly you heard monotonous knocking sounds at the door.\nYou sat up from your bed.";
  questionText.textContent = "Will you open the door? (Yes/No)";
  showButtons();
}

// Function to show Yes and No buttons
function showButtons() {
  yesButton.style.display = "inline-block";
  noButton.style.display = "inline-block";
}

// Function to hide Yes and No buttons
function hideButtons() {
  yesButton.style.display = "none";
  noButton.style.display = "none";
}

// Handle Yes button click
yesButton.onclick = function () {
  processYesAnswer();
};

// Handle No button click
noButton.onclick = function () {
  processNoAnswer();
};

// Function to process Yes answers
function processYesAnswer() {
  if (currentStep === 0) {
    storyText.textContent = "An old woman was at the door. She said she came from Canada and it's too late for traveling more, asking for food and shelter.";
    questionText.textContent = "Will you give her shelter? (Yes/No)";
    currentStep++;
  } else if (currentStep === 1) {
    storyText.textContent = "After two minutes, police arrive and ask if you've seen an old woman who was actually an imposter.";
    questionText.textContent = "Will you tell them? (Yes/No)";
    currentStep++;
  } else if (currentStep === 2) {
    storyText.textContent = "Congratulations! You win as the police catch the imposter.";
    questionText.textContent = "Game Over.";
    endGame();
  } else if (currentStep === 3) {
    storyText.textContent = "The woman turns out to be a witch and offers you a magical potion. Will you drink it?";
    questionText.textContent = "Drink the potion? (Yes/No)";
    currentStep++;
  } else if (currentStep === 4) {
    storyText.textContent = "The potion grants you eternal youth! You've become immortal. Congratulations!";
    questionText.textContent = "Game Over.";
    endGame();
  } else if (currentStep === 5) {
    storyText.textContent = "The potion has side effects, causing hallucinations. Do you trust the vision?";
    questionText.textContent = "Trust the vision? (Yes/No)";
    currentStep++;
  } else if (currentStep === 6) {
    storyText.textContent = "You follow the vision and find a hidden treasure! You're rich now.";
    questionText.textContent = "Game Over.";
    endGame();
  } else if (currentStep === 7) {
    storyText.textContent = "The hallucinations lead to a dark forest where you're lost forever. You die alone.";
    questionText.textContent = "Game Over.";
    endGame();
  }
}

// Function to process No answers
function processNoAnswer() {
  if (currentStep === 0) {
    storyText.textContent = "The old woman breaks the door and threatens you with a gun.";
    questionText.textContent = "Will you allow her in? (Yes/No)";
    currentStep++;
  } else if (currentStep === 1) {
    storyText.textContent = "After two minutes, the police arrive and ask if you've seen an old woman who was an imposter.";
    questionText.textContent = "Will you tell them? (Yes/No)";
    currentStep++;
  } else if (currentStep === 2) {
    storyText.textContent = "You will go to jail for hiding the imposter.";
    questionText.textContent = "Game Over.";
    endGame();
  } else if (currentStep === 3) {
    storyText.textContent = "The witch curses you for rejecting her. You fall into a deep sleep.";
    questionText.textContent = "Game Over.";
    endGame();
  } else if (currentStep === 4) {
    storyText.textContent = "The police find evidence of the imposter's crimes and arrest you for assisting her.";
    questionText.textContent = "Game Over.";
    endGame();
  } else if (currentStep === 5) {
    storyText.textContent = "You resist the vision and decide to leave the house.";
    questionText.textContent = "Will you leave the house? (Yes/No)";
    currentStep++;
  } else if (currentStep === 6) {
    storyText.textContent = "You find a hidden passage in your house leading to an underground bunker!";
    questionText.textContent = "Will you enter the bunker? (Yes/No)";
    currentStep++;
  } else if (currentStep === 7) {
    storyText.textContent = "You discover the bunker is a safe zone from the world, a place to start a new life.";
    questionText.textContent = "Game Over.";
    endGame();
  } else if (currentStep === 8) {
    storyText.textContent = "The bunker leads to an evil scientist's lab. You've been trapped in an experiment.";
    questionText.textContent = "Game Over.";
    endGame();
  }
}

// Function to end the game and show Restart & Logout buttons
function endGame() {
  hideButtons();

  // Create Restart button
  const restartButton = document.createElement("button");
  restartButton.textContent = "Restart";
  restartButton.onclick = function () {
    window.location.href = "/dashboard"; // Redirect to dashboard
  };
  
  // Create Logout button
  const logoutButton = document.createElement("button");
  logoutButton.textContent = "Logout";
  logoutButton.onclick = function () {
    window.location.href = "/"; // Redirect to home page
  };

  // Add buttons to button container
  buttonContainer.appendChild(restartButton);
  buttonContainer.appendChild(logoutButton);
}

// Function to initialize game on page load
document.addEventListener("DOMContentLoaded", function () {
  startGame();
});
