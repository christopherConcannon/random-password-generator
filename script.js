// Assignment code here
// STORE CHARACTER SETS IN ARRAY FOR EACH TYPE IN GLOBAL SCOPE
var allLowChars = "abcdefghijklmnopqrstuvwxyz".split('');
var allUpChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split('');
var allNums = "0123456789".split('');
var allSpcChars = " !\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~".split('');


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