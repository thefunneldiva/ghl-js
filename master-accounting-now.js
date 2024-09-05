// Set the interval
var interval = setInterval(function () {
  var checkbox = document.querySelector('input[name="terms_and_conditions"]');
  if (checkbox) {
    if (!checkbox.checked) {
      checkbox.click();  // Simulate the click
      checkbox.checked = true;  // Make sure it stays checked
    } else {
      // Stop the interval if the checkbox is already checked
      clearInterval(interval);
      console.log('Checkbox is checked, interval stopped');
    }
  }
}, 1000);

// Add an event listener to stop the interval when the checkbox is manually clicked
var checkbox = document.querySelector('input[name="terms_and_conditions"]');
checkbox.addEventListener('click', function() {
  if (checkbox.checked) {
    clearInterval(interval);  // Stop the interval if it's checked
    console.log('Checkbox manually clicked, interval stopped');
  }
});
