/*

Week 1 : HOMEWORK
start with simple word counter

Sep 11th, 2014
woonyungchoi@gmail.com

start to counting I/ My
*/

var arrayForI = [];
var arrayForMy = [];
var arrayForMe = [];

// number of words
var numberOfWord = 0;
var	numberOfI,
	numberOfMy,
	numberOfMe= 0;

$(document).ready(function(){

	// function that counts the number of words
	function wordCount(inputText){
		// split word with space
		var word = inputText.split(' ');
		// console.log(word); // array
		for ( var i = 0; i < word.length; i ++){
			console.log(word[i]);
			// if I found certain word -> store into the array
			if ( word[i] == "I") arrayForI.push(word[i]);
			if ( word[i].toLowerCase() == "my") arrayForMy.push(word[i]);
			if ( word[i].toLowerCase() == "me") arrayForMe.push(word[i]);
		}
		// number of word
		numberOfWord = word.length;
		numberOfI  = arrayForI.length;
		numberOfMy = arrayForMy.length;
		numberOfMe = arrayForMe.length;


		console.log("nubmer of Words: " + numberOfWord);
		console.log("number of I: " + arrayForI.length);
		
		//====================//
		console.log(arrayForI);
		console.log(arrayForMy);
		console.log(arrayForMe);



		// console.log("number of MY: " + arrayForMy.length);
		return numberOfWord;
	}


	// var textBox = document.getElementById("textBox").value;
	var textContents = $("#textBox");
	$('#submitButton').click(function(){

		// empty array so that it does not save previous one
		arrayForI = [];
		arrayForMy = [];
		arrayForMe = [];

		// Get value of text area
		var texts = textContents.val();
		// console.log(texts);
		// console.log(typeof texts); // displays as string

		// call the wordCount function - using our text inputs
		wordCount(texts);

		/////// append the results
		// clear the previous one
		$("#outputArea2").html('');
		// and append new results
		$("#outputArea2").append("Total number of Word: " + numberOfWord +
								"<br>" + 
								"Number of I: " + numberOfI +
								"<br>" +  
								"Number of My: " + numberOfMy +
								"<br>" + 
								"Number Of Me: " + numberOfMe);
	});
});