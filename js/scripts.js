// Business Logic:

function validateNumber(input) {
  const splitInput = input.split("");
  const parsedSplitInput = splitInput.map(function(character) {
    return parseInt(character);
  });
  const integerBoolean = parsedSplitInput.every(function(val) {
    if (Number.isInteger(val) !== true) {
      return false;
    } else {
      return true;
    }
  });
  if (integerBoolean === true) {
    return input;
  } else {
    return false
  }
}

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

// // End UI Logic