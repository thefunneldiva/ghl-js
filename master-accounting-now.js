// Select the checkbox using the name attribute
setInterval(function () {
  var checkbox = document.querySelector('input[name="terms_and_conditions"]');
  if (checkbox) {
    checkbox.checked = true;  // Set it to checked by default
  }
}, 1000)

console.log("JS From Github");
