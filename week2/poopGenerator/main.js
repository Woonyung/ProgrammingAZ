/*

WEEK 2 : HOMEWORK EXERCISE
September 18th, 2014
woonyungchoi@gmail.com

convert all the vowels into poop icon XD
-
but how I can convert digits into bigger poop item at the same time??? 
should figure it out 
*/

var inputText,
	translateButton,
	outputText;

function setup(){
	noCanvas();

	// referring the html elements
	inputText = getElement("inputText");
	translateButton = getElement("translate");
	translateButton.mousePressed(generatePoops);

	//output text
	outputText = getElement("outputBox");

}

function generatePoops(){
	translateVowel();
}

function translateVowel(){
	// get an value
	var texts = inputText.value();

	var regexVowel = /[aeiou]/g;
	var vowelpoop = texts.match(regexVowel);

	var replaceText = texts.replace(regexVowel,'<img src="poop.png" width="20px">');
	outputText.html(replaceText);

	//digits
	var regexDigits = /\d/g;
	var digitpoop = texts.match(regexDigits);
}


//get text file
// jQuery.get('http://localhost/foo.txt', function(data) {
//     var myvar = data;
// });

