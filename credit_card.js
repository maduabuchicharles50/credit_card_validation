const prompt = require("prompt-sync")({ sigint: true });


// Function that takes input from a user
function generalInput() {
    const userInput = prompt("Enter your card number: ");
    var len = userInput.length;
    let firstNumber = parseInt(userInput[0]);
    let firstTwoNum =parseInt(userInput.slice(0, 2));
    if (firstNumber === 5){
        if (firstTwoNum === 51 || firstTwoNum === 52 || firstTwoNum === 53 || firstTwoNum === 54 || firstTwoNum === 55 && len === 16){
            masterCardnumber(parseInt(userInput))
        }
    } else if ( firstNumber === 4){
        if (len === 13 || len === 16){
            visaCardnumber(parseInt(userInput));
        }
    } else {
        console.log("Invalid card");
    }
}

// Master card validation
function masterCardnumber(inputtxt) {
    let cardNumber = /^(?:5[1-5][0-9]{14})$/;
    let valid = cardNumber.test(inputtxt);
    if (valid){
        console.log(`Your Master card number is ${inputtxt} and is valid`);
    } 
  }

  // Visa card validation
  function visaCardnumber(inputtxt) {
    let cardNumber = /^(?:4[0-9]{12}(?:[0-9]{3})?)$/;
    let valid = cardNumber.test(inputtxt);
    if (valid){
        console.log(`Your Visa card number is ${inputtxt} and is valid`);
    }
  }
  

generalInput();
