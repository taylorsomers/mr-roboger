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

function roboConvert(array) {
  const roboConverted = [];
  for (let i = 0; i <= array.length; i++) {
    if (i === 1) {
      roboConverted.push("Beep!");
    } else {
      roboConverted.push(i);
    }
  }
  return roboConverted;
}

function countUp(input) {
  let countArray = [];
  for (let i = 0; i <= input; i++) {
    countArray.push(i);
  }
  let convertedArray = roboConvert(countArray);
  return convertedArray;
  }

// End Business Logic

// UI Logic

$(document).ready(function() {
  $("form#form").submit(function(event) {
    (event).preventDefault();
    const toValidate = $("#user-input").val();
    const userInteger = parseInt(toValidate);
    let validated = validateNumber(toValidate);
    const rangeCounted = countUp(userInteger);
    if (validated) {
      $("#results").text(rangeCounted);
    } else {
      $("#results").text("Please enter a whole number.");
    }
  });
});

// End UI Logic