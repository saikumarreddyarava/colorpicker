// Define the number of squares
var noOfSquares = 6;

// Array to store colors
var arr = [];

// Variable to store the picked color
var picked;

// Get the squares elements
var squares = document.getElementsByClassName("square");

// Get the target color element
var targetColor = document.getElementById("targetColor");

// Get the message element
var message = document.getElementById("message");

// Get the h1 element
var head = document.querySelector("h1");

// Get the reset button
var reset = document.getElementById("NewColor");

// Call the init function to initialize the game
init();

function init() {
  // Generate random colors and assign to the array
  arr = generateRandomColor(noOfSquares);

  // Pick a random color from the array
  picked = arr[randomPickedColorIndex()];

  // Set the picked color as the target color text
  targetColor.textContent = picked;

  // Assign colors to squares and add event listeners
  for (var i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = arr[i];
    squares[i].addEventListener("click", function () {
      if (picked === this.style.backgroundColor) {
        // Correct color selected
        message.textContent = "Correct";
        message.style.color = "green";
        changeColor(this.style.backgroundColor);
        reset.textContent = "Play Again?";
      } else {
        // Incorrect color selected
        message.textContent = "Try Again";
        message.style.color = "red";
        this.style.backgroundColor = "#232323";
      }
    });
  }

  // Add event listener to the reset button
  reset.addEventListener("click", resetIn);
}

function randomPickedColorIndex() {
  return Math.floor(Math.random() * arr.length);
}

function generateRandomColor(limit) {
  var color = [];
  for (var i = 0; i < limit; i++)
    color.push(rgbGenerator());
  return color;
}

function rgbGenerator() {
  var r = Math.floor(Math.random() * 256);
  var g = Math.floor(Math.random() * 256);
  var b = Math.floor(Math.random() * 256);
  return "rgb(" + r + ", " + g + ", " + b + ")";
}

function changeColor(color) {
  for (var i = 0; i < squares.length; i++)
    squares[i].style.backgroundColor = color;
  head.style.backgroundColor = color;
}

function resetIn() {
  // Generate new random colors
  arr = generateRandomColor(noOfSquares);

  // Pick a new random color
  picked = arr[randomPickedColorIndex()];

  // Update the target color text
  targetColor.textContent = picked;

  // Clear the message
  message.textContent = "";

  // Reset the h1 background color
  head.style.backgroundColor = "steelblue";

  // Assign new colors to squares
  for (var i = 0; i < squares.length; i++)
    squares[i].style.backgroundColor = arr[i];
}
