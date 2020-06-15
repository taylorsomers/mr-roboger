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

function roboOutputLogic(array) {
  let output = [];
  for (let i = 0; i <= array.length; i++) {
    let oneBoolean = array.every(function(val) {
      if (val !== 1) {
        return true;
      } else {
        return false;
      }
    });
    let twoBoolean = array.every(function(val) {
      if (val !== 2) {
        return true;
      } else {
        return false;
      }
    });
    let threeBoolean = array.every(function(val) {
      if (val !== 3) {
        return true;
      } else {
        return false;
      }
    });
    if (!threeBoolean) {
      output = ["Won't you be my neighbor?"];
    } else if (!twoBoolean) {
      output = ["Boop!"];
    } else if (!oneBoolean) {
      output = ["Beep!"];
    } else {
      output = [array.join("")];
    }
  }
  return output;
}

function roboConvert(array) {
  const roboConverted = [];
  for (let i = 0; i < array.length; i++) {
    let numberToCheck = i.toString();
    let numberToCheckSplit = numberToCheck.split("");
    let numberToCheckArray = numberToCheckSplit.map(function(digit) {
      return parseInt(digit);
    });
    let roboOutput = roboOutputLogic(numberToCheckArray);
    roboConverted.push(roboOutput);
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
    const rangeCounted = (countUp(userInteger)).join(", ");
    if (validated) {
      $("#results").text('"' + rangeCounted + '"');
    } else {
      $("#results").text('"Please enter a whole number."');
    }
  });
});

// End UI Logic