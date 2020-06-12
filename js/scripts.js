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
    return true;
  } else {
    return false;
  }
}

function countUp(input) {
  let countArray = [];
  for (let i = 0; i <= input; i ++) {
    countArray.push(i);
  }
  return countArray;
  }

// End Business Logic

// UI Logic

$(document).ready(function() {
  $("form#form").submit(function(event) {
    (event).preventDefault();
    const toCount = $("#user-input").val();
    const userInteger = parseInt(toCount);
    const counted = validateNumber(toCount);
    const rangeCounted = countUp(userInteger);
    if (counted === true) {
      $("#results").text(rangeCounted);
    } else {
      $("#results").text("Please enter a whole number.");
    }
  });
});

// End UI Logic