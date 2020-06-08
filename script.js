// CACHE DOM ELEMENTS
var generateBtn = document.querySelector('#generate');
var passwordText = document.querySelector('#password');

// EVENT LISTENERS
generateBtn.addEventListener('click', generatePassword);

// STORE CHARACTER SETS IN ARRAY FOR EACH TYPE IN GLOBAL SCOPE
var allLowChars = 'abcdefghijklmnopqrstuvwxyz'.split('');
var allUpChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
var allNums = '0123456789'.split('');
var allSpcChars = ' !"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~'.split('');

// // PROMPT FOR PASSWORD LENGTH & VALIDATE RESPONSE
function generatePassword() {
	var numChars = prompt(
		'How many characters would you like in your password (Enter a value between 8 and 128)'
	);
	// allow user to cancel
	if (numChars === null) return;

	// coerce NaN if input is a text string that cannot be coerced to a number
	numChars = parseInt(numChars);

	// validate input
	while (isNaN(numChars) || numChars < 8 || numChars > 128) {
		if (numChars === null) return;
		numChars = prompt('Invalid entry, please enter a NUMBER between 8 and 128');
	}

	selectChars(numChars);
}

// PROMPT FOR CHARACTER TYPES TO USE
function selectChars(numChars) {
	var lowCase = confirm(
		'Would you like to include LOWERCASE characters in password? (Click OK for YES)'
	);
	var upCase = confirm(
		'Would you like to include UPPERCASE characters in password? (Click OK for YES)'
	);
	var nums = confirm(
		'Would you like to include NUMBERS in your password? (Click OK for YES)'
	);
	var specials = confirm(
		'Would you like to include SPECIAL CHARACTERS in your password? (Click OK for YES)'
	);

	if (lowCase === false && upCase === false && nums === false && specials === false) {
		alert('You must choose at least one type of character to use for your password');
		lowCase = confirm(
			'Would you like to include LOWERCASE characters in password? (Click OK for YES)'
		);
		upCase = confirm(
			'Would you like to include UPPERCASE characters in password? (Click OK for YES)'
		);
		nums = confirm(
			'Would you like to include NUMBERS in your password? (Click OK for YES)'
		);
		specials = confirm(
			'Would you like to include SPECIAL CHARACTERS in your password? (Click OK for YES)'
		);
	}

	// build object for criteria config
	var criteria = {
		numChars : numChars,
		lowCase  : lowCase,
		upCase   : upCase,
		nums     : nums,
		specials : specials
	};

	createPassword(criteria);
}

// UNTIL PW LENGTH IS FULFILLED, LOOP OVER ALL CHARACTER TYPES & (DEPENDING ON CRITERIA BOOLEAN) CALL SUBROUTINE TO GENERATE RANDO INDEX IN CHAR SET TO PUSH TO PW ARRAY
function createPassword(criteria) {
	var passwordArr = [];
	while (passwordArr.length < criteria.numChars) {
		if (criteria.lowCase) {
			passwordArr.push(allLowChars[genRanIdx(allLowChars)]);
		}
		if (criteria.upCase) {
			passwordArr.push(allUpChars[genRanIdx(allUpChars)]);
		}
		if (criteria.nums) {
			passwordArr.push(allNums[genRanIdx(allNums)]);
		}
		if (criteria.specials) {
			passwordArr.push(allSpcChars[genRanIdx(allSpcChars)]);
		}
	}
	var passWordStr = passwordArr.join('');
	writePassword(passWordStr);
}

// GENERATE RANDOM INDEX FROM CHAR SETS
function genRanIdx(charSet) {
	return Math.floor(Math.random() * charSet.length);
}

// Write password to the #password input
function writePassword(password) {
	passwordText.value = password;
}
