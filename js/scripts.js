// Business Logic:

function validateNumber(input) {
  const inputParsed = parseInt(input);
  if (Number.isInteger(inputParsed)) {
    return inputParsed.toString();
  } else {
    return false;
  }
}

// End Business Logic

// UI Logic

$(document).ready(function() {
  $("form#form").submit(function(event) {
    (event).preventDefault();
    const toCount = $("#user-input").val();
    const counted = validateNumber(toCount);

    if (counted !== false) {
      $("#results").text(counted);
    } else {
      $("#results").text("Please enter a whole number.");
    }
  });
});

// End UI Logic