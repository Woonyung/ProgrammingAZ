var userInput1;
var userInput2;
var userInput3;
var userInput4;
var submitButton;
var crazy1;
var normal1;
var neutral1;
var crazy2;
var normal2;
var neutral2;
var crazy3;
var normal3;
var neutral3;
var crazy4;
var normal4;
var neutral4;
var a1;
var b1;
var a2;
var b2;
var a3;
var b3;
var a4;
var b4;

var canvasWidth = 300;
var canvasHeight = 60;


//this is code for assigning random shapes to the users
////////////////////////////////////////////////////////
var sketch1 = function (sketch){

	////////////////////////////////
	// SETUP
	////////////////////////////////
	sketch.setup = function(){

		sketch.createCanvas(canvasWidth,canvasHeight);
		sketch.background(255);


		userInput1 = sketch.getElement("facet_one");
		userInput2 = sketch.getElement("facet_two");
		userInput3 = sketch.getElement("facet_three");
		userInput4 = sketch.getElement("facet_four");
		// submitButton = sketch.getElement("calc");
		// submitButton.mousePressed(getUserInput1);
		// submitButton.mousePressed(getUserInput2);
		// submitButton.mousePressed(getUserInput3);
		// submitButton.mousePressed(getUserInput4);

		$('#submit').hover(submitHovered, submitOutHovered);
		function submitHovered(){
			console.log("hovered");
			getUserInput1();
			getUserInput2();
			getUserInput3();
			getUserInput4();
		}

		// when it is out clear out the html
		function submitOutHovered(){
			console.log("it's out");
			$("#facet1").html("");
			$("#facet2").html("");
			$("#facet3").html("");
			$("#facet4").html("");
		}

	};

	// we will get it later..
    function getUserInput1(){

		
		console.log("**************facet1 is changed");
		crazy1=0;
		normal1=0;
		neutral1=0;
		var inputTexts = userInput1.value(); // get value from textarea
		var tokens = inputTexts.split(/\W+/);

		if (tokens.length < 20){
			alert("Please enter more text in question 1!");
		} else {
			// load the json file- locally
			$.getJSON("test.json", function(json) {
				var results = json;

				//console.log(results);

				// counter for each category
				a1 = 0; // a category
				b1 = 0; // b category

			    // looping through the input texts and spit out the words
			    tokens.forEach(function(w){
			      //console.log(w);
			      if(results[w]) {
			        // create an empty array
			        var wordFreqA = [];
			        var wordFreqB = [];

			        // if user's word is matched with category A AND B's word
			        if (results[w].countA > 0 && results[w].countB > 0){
			        	wordFreqA.push(results[w]);
			        	wordFreqB.push(results[w]);

			        	a1++;
			        	b1++;

			        } 
			        else if (results[w].countA > 0 ){ // if it is matched with category A's word
			          wordFreqA.push(results[w]);
			          a1++;
			        }
			        else if (results[w].countB > 0){ // if it is matched with category B's word
			          //console.log( w + "You used the counterB's words");
			          wordFreqB.push(results[w]);
			          b1++;
			      	} 


					if(b1>a1){
					  crazy1=crazy1+1;
					  console.log("you are CRAZY!");
					} else if ( b1<a1 ) {
					  normal1=normal1+1;	
					  console.log("you are normal");
					} else if (a1==b1) {
					  neutral1=neutral1+1;
					  console.log("what are you??");
					}
			      } 
					
			  });
				$("#facet1").append('{ "a":' + a1 +  ', "b":' + b1 + ', "crazy":' + crazy1 + ', "normal":' + normal1 + ', "neutral":' + neutral1 + '}');
		});
	}
	}

function getUserInput2(){

		
	console.log("**************facet2 is changed");
     crazy2=0;
	 normal2=0;
	 neutral2=0;
  	var inputTexts = userInput2.value(); // get value from textarea
  	var tokens = inputTexts.split(/\W+/);
	if (tokens.length < 20){
		alert("Please enter more text in question 2!");
	} else {
			// load the json file- locally
			$.getJSON("test.json", function(json) {
				var results = json;

				//console.log(results);

				// counter for each category
				a2 = 0; // a category
				b2 = 0; // b category

			    // looping through the input texts and spit out the words
			    tokens.forEach(function(w){
			      //console.log(w);
			      if(results[w]) {
			        // create an empty array
			        var wordFreqA = [];
			        var wordFreqB = [];

			        // if user's word is matched with category A AND B's word
			        if (results[w].countA > 0 && results[w].countB > 0){
			        	wordFreqA.push(results[w]);
			        	wordFreqB.push(results[w]);

			        	a2++;
			        	b2++;

			        } 
			        else if (results[w].countA > 0 ){ // if it is matched with category A's word
			          wordFreqA.push(results[w]);
			          a2++;
			        }
			        else if (results[w].countB > 0){ // if it is matched with category B's word
			          //console.log( w + "You used the counterB's words");
			          wordFreqB.push(results[w]);
			          b2++;
			      	} 


					if(b2>a2){
					  crazy2 = crazy2+1;
					  console.log("you are CRAZY!");
					} else if ( b2<a2 ) {
					  normal2 = normal2+1;	
					  console.log("you are normal");
					} else if (a2==b2) {
					  neutral2=neutral2+1;
					  console.log("what are you??");
					}
			      } 
					
			  });
				$("#facet2").append('{ "a":' + a2 +  ', "b":' + b2 + ', "crazy":' + crazy2 + ', "normal":' + normal2 + ', "neutral":' + neutral2 + '}');
		});
	}
	}

 function getUserInput3(){

		
	console.log("**************logging something**************");
     crazy3=0;
	 normal3=0;
	 neutral3=0;
  	var inputTexts = userInput3.value(); // get value from textarea
  	var tokens = inputTexts.split(/\W+/);

	if (tokens.length < 20){
		alert("Please enter more text in question 3!");
	} else {
		  // load the json file- locally
	  	$.getJSON("test.json", function(json) {
	  	var results = json;

	    // counter for each category
	     a3 = 0; // a category
	     b3 = 0; // b category

	    // looping through the input texts and spit out the words
	    tokens.forEach(function(w){
	      if(results[w]) {

	        // create an empty array
	        var wordFreqA = [];
	        var wordFreqB = [];

	        // if user's word is matched with category A AND B's word
	        if (results[w].countA > 0 && results[w].countB > 0){
	        	wordFreqA.push(results[w]);
	        	wordFreqB.push(results[w]);

	        	a3++;
	        	b3++;

	        } 
	        else if (results[w].countA > 0 ){ // if it is matched with category A's word
	          //console.log( w + "You used the counterA's words");
	          wordFreqA.push(results[w]);
	          a3++;
	        }
	        else if (results[w].countB > 0){ // if it is matched with category B's word
	          //console.log( w + "You used the counterB's words");
	          wordFreqB.push(results[w]);
	          //console.log("this is frequency B:")
	          //console.log(wordFreqB);
	          b3++;
	      	} 

			if (b3>a3) {
			   crazy3=crazy3+1;
			   console.log("you are CRAZY!");
			} else if (b3<a3) {
			   normal3=normal3+1;
			   console.log("you are normal");
			} else if (a3==b3) {   
			   neutral3=neutral3+1;
			   console.log("what are you??");
			}
			
	          // "localhost:8080/saveValues"
	      } 
			
	  	});
			$("#facet3").append('{ "a":' + a3 +  ', "b":' + b3 + ', "crazy":' + crazy3 + ', "normal":' + normal3 + ', "neutral":' + neutral3 + '}');    
	 
	          
		});
	}


}


 function getUserInput4(){

 	crazy4=0;
	normal4=0;
	neutral4=0;

  	var inputTexts = userInput4.value(); // get value from textarea
  	var tokens = inputTexts.split(/\W+/);

	if (tokens.length < 20){
		alert("Please enter more text in question 4!");
	} else {
		  // load the json file- locally
	  	$.getJSON("test.json", function(json) {
	  	var results = json;

	    // console.log(results['actually']);

	    // counter for each category
	     a4 = 0; // a category
	     b4 = 0; // b category

	    // looping through the input texts and spit out the words
	    tokens.forEach(function(w){
	      if(results[w]) {
	        // create an empty array
	        var wordFreqA = [];
	        var wordFreqB = [];

	        // if user's word is matched with category A AND B's word
	        if (results[w].countA > 0 && results[w].countB > 0){
	        	wordFreqA.push(results[w]);
	        	wordFreqB.push(results[w]);

	        	a4++;
	        	b4++;

	        } 
	        else if (results[w].countA > 0 ){ // if it is matched with category A's word
	          //console.log( w + "You used the counterA's words");
	          wordFreqA.push(results[w]);
	          a4++;

	        }
	        else if (results[w].countB > 0){ // if it is matched with category B's word
	          //console.log( w + "You used the counterB's words");
	          wordFreqB.push(results[w]);
	          b4++;
	      	} 
	 
			if (b4 > a4) {
			   crazy4=crazy4+1;
			   console.log("you are CRAZY!");
			} else if (b4 < a4) {
			   normal4=normal4+1;
			   console.log("you are normal");
			} else if (a4 == b4) {
			   neutral4=neutral4+1;
			   console.log("what are you??");
			}
	      } 
			
	  });
	       $("#facet4").append('{ "a":' + a4 +  ', "b":' + b4 + ', "crazy":' + crazy4 + ', "normal":' + normal4 + ', "neutral":' + neutral4 + '}');   
	          
			});
		}
	}

	//////////////////////////////
	// DRAW
	/////////////////////////////
	sketch.draw = function(){
		// don't loop
		sketch.noLoop();


		/////////// randomly generated to the color
		var r = Math.floor((Math.random() * 255) + 0);
		var g = Math.floor((Math.random() * 255) + 0);
		var b = Math.floor((Math.random() * 255) + 0);
		// add into textarea - 
		$("#r").append(r);
		$("#g").append(g);
		$("#b").append(b);


		////////// randomly generate shapes..
		// generate code 1 or 2
		var randomShapeCode = Math.ceil((Math.random()*2));

		if(randomShapeCode== 1){ // if code is 1 : ellipse
			sketch.noStroke();
			sketch.fill(r,g,b, 80);
			sketch.ellipse(15,canvasHeight/2 + 15,30,30);
			sketch.ellipseMode(sketch.CENTER);

		} else if (randomShapeCode == 2){ // if code is 2 : rect
			sketch.noStroke();
			sketch.fill(r,g,b, 80);
			sketch.rect(0,canvasHeight/2,30,30);
			sketch.rectMode(sketch.CENTER);
		}

		$("#shapes").append(randomShapeCode);
		console.log("*********************************");

	};

};


// adding canvas to "showingShapes" divss
var p51 = new p5( sketch1, 'showingShapes');