// Assignment code here
// STORE CHARACTER SETS IN ARRAY FOR EACH TYPE IN GLOBAL SCOPE
var allLowChars = 'abcdefghijklmnopqrstuvwxyz'.split('');
var allUpChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
var allNums = '0123456789'.split('');
var allSpcChars = ' !"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~'.split('');

function generatePassword() {
	// PROMPT FOR PASSWORD LENGTH & VALIDATE RESPONSE
	var numChars = prompt(
		'How many characters would you like in your password (Enter a value between 8 and 128)'
	);
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
		numChars = prompt('Invalid entry, please enter a NUMBER between 8 and 128');
	}

	// PROMPT FOR CHARACTER TYPES TO USE
	var lowCase = confirm('Would you like to include LOWERCASE characters in password?');
	var upCase = confirm('Would you like to include UPPERCASE characters in password?');
	var nums = confirm('Would you like to include NUMBERS in your password?');
	var specials = confirm(
		'Would you like to include SPECIAL CHARACTERS in your password?'
	);

	if (lowCase === false && upCase === false && nums === false && specials === false) {
		alert('You must choose at least one type of character to use for your password');
		lowCase = confirm('Would you like to include LOWERCASE characters in password?');
		upCase = confirm('Would you like to include UPPERCASE characters in password?');
		nums = confirm('Would you like to include NUMBERS in your password?');
		specials = confirm(
			'Would you like to include SPECIAL CHARACTERS in your password?'
		);
	}

	var criteria = {
		numChars : numChars,
		lowCase  : lowCase,
		upCase   : upCase,
		nums     : nums,
		specials : specials
	};
}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
	var password = generatePassword();
	var passwordText = document.querySelector('#password');

	passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);
