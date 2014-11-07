/*

WEEK 2 : HOMEWORK EXERCISE
September 18th, 2014
woonyungchoi@gmail.com

Form Validating Practice
*/


var email,
	phoneNumber,
	zipCode;

var emailOutput,
	phoneOutput,
	zipOutput;

var proceedButton;

function setup(){
	noCanvas();

	//////// inputs ///////////////
	// referring the html elements
	email = getElement("emailAddress");
	phoneNumber = getElement("phoneNumber");
	zipCode = getElement("zipCode");

	//////// outputs /////////////
	emailOutput = getElement("EmailOutput");
	phoneOutput = getElement("PhoneOutput");
	zipOutput = getElement("ZipcodeOutput");

	proceedButton = getElement("proceed");
	// if proceedButton is pressed, run those functions
	proceedButton.mousePressed(StartValidate);
}

function StartValidate(){
	validateEmail();
	validatePhone();
	validateZip();
}

function validateEmail(){
	// get an value
	// console.log("testing if you typed email address correctly");
	var emailOriginal = email.value();

	var regex = /(^[\w]+@[A-Za-z0-9]+\.[A-Za-z]+$)|(^[A-Za-z0-9-_+]+@[A-Za-z]+\.[A-Za-z]+\.[A-Za-z]+)/gi;
	var emailTyped = emailOriginal.match(regex);

	// if it is matched with results
	if (emailTyped = regex.exec(emailOriginal)){
		console.log(emailTyped[0]);
		emailOutput.html("<img src='smiley.png' width='18px'> ok!")
		emailOutput.style("color", "#58C000");
	} else {
		emailOutput.html("<img src='poop.png' width='20px'>You should type correct email address");
		emailOutput.style("color","red");
	}



}
function validatePhone(){
	//console.log("testing if you typed phonenumber correctly");
	var PhoneNumberOriginal = phoneNumber.value();

	//  how about the space?
	var regex = /(\d{3})-(\d{3})-(\d{4})|(\d{3})[.](\d{3})[.](\d{4})/g;
	var PhoneNumberTyped = PhoneNumberOriginal.match(regex);


	// if it matched with results 
	if (PhoneNumberTyped = regex.exec(PhoneNumberOriginal)){
		console.log(PhoneNumberTyped[0]);
		phoneOutput.html("<img src='smiley.png' width='18px'> ok!")
		phoneOutput.style("color", "#58C000");
	} else {
		phoneOutput.html("<img src='poop.png' width='20px'> You should type correct phone number");
		phoneOutput.style("color", "red");
	}

}

function validateZip(){
	// console.log("testing if you typed zip code correctly");
	var zipCodeOriginal = zipCode.value();

	// (^)start with digit and must be 5 digits ends($) OR 
	// (^)start with digit and must be 5 digits + - and 4 digits
	var regex = /(^\d{5}$)|(^\d{5}\-\d{4}$)/g; 
	var zipCodeTyped = zipCodeOriginal.match(regex);

	// if it is matched with results
	if ( zipCodeTyped = regex.exec(zipCodeOriginal)){
		console.log(zipCodeTyped[0]);
		zipOutput.html("<img src='smiley.png' width='18px'> ok!");
		zipOutput.style("color", "#58C000");
	} else {
		zipOutput.html("<img src='poop.png' width='20px'> You should type correct zipcode");
		zipOutput.style("color", "red");
	}


}