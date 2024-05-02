// JavaScript for dynamic functionality
document.addEventListener("DOMContentLoaded", function() {
  // Get the button element
  var button = document.querySelector(".btn-primary");

  // Add click event listener to the button
  button.addEventListener("click", function() {
    // Generate a random color
    var randomColor = "#" + Math.floor(Math.random()*16777215).toString(16);
    
    // Set the background color of the body to the random color
    document.body.style.backgroundColor = randomColor;
  });
});
