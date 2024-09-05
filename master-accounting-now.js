// Select the checkbox using the name attribute
var checkbox = document.querySelector('input[name="terms_and_conditions"]');
setInterval(function () {
  if (checkbox) {
        checkbox.click();
        checkbox.checked = true;  // Set it to checked by default
    console.log('Must checked')
  }
}, 1000)

// Target the checkbox using its name attribute
// var checkbox = document.querySelector('input[name="terms_and_conditions"]');

// // After 17 seconds (17000 milliseconds), click and check the checkbox
// setTimeout(function() {
//   if (checkbox) {
//     checkbox.click();  // This will simulate a user click
//     checkbox.checked = true;  // Make sure it stays checked
//   }
//   console.log('Must checked');
// }, 17000);

console.log("JS From Github");
