// Assignment code here
// STORE CHARACTER SETS IN ARRAY FOR EACH TYPE IN GLOBAL SCOPE
var allLowChars = "abcdefghijklmnopqrstuvwxyz".split('');
var allUpChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split('');
var allNums = "0123456789".split('');
var allSpcChars = " !\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~".split('');

function generatePassword() {
    // PROMPT FOR PASSWORD LENGTH & VALIDATE RESPONSE
    var numChars = prompt("How many characters would you like in your password (Enter a value between 8 and 128)");
    // allow user to cancel
    if (numChars === null) {
      return;
    }
  
    // coerce NaN if input is a text string that cannot be coerced to a number
    numChars = parseInt(numChars);
  
    // validate input
    while (isNaN(numChars) || numChars < 8 || numChars > 128) {
      if (numChars === null) {
        return;
      }
      numChars = prompt("Invalid entry, please enter a NUMBER between 8 and 128");
    }
}


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);