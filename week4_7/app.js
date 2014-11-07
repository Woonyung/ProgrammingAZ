/*
   ___ _ _                __      __      __             
  / __| (_)__ _ _ _ ___  / _|___  \ \    / /__  ___ _ _  
 | (__| | / _` | '_/ -_) > _|_ _|  \ \/\/ / _ \/ _ \ ' \ 
  \___|_|_\__,_|_| \___| \_____|    \_/\_/\___/\___/_||_|

* with servi:)- server side
*/
////////////////////////////////////////////////////////

// setup Servi
var servi = require('servi');
// make an new port
var app = new servi(true);
// set the port 
port(8080);

/////////////////////////////////////////////////////
// ROUTES
/////////////////////////////////////////////////////
// serving up a directory of files
// index file and client-side js file will be in the public folder
serveFiles("public");

// making databases
// saves your data like JSON
var database = useDatabase("databasedb");

// A route for saving data
route('/save', saveData);

// A route for serving up the data
route('/ourResults', jsonAPI);

/////////////////////////////////////////////////////
// DATABASE
/////////////////////////////////////////////////////
// save the data based on userInput
function saveData(request){
	//request.params['color'] = [Math.floor(Math.random()*255),255,0];

	// this is how our database going to look like
	// they recognize by its "name" (in input field) 
	var data = {
		shape: request.params['shapes'],
		// saves some ranomly generated color
		r: request.params['r'],
		g: request.params['g'],
		b: request.params['b'],
		// text field 
		facet1: request.params['facet1'],
		facet2: request.params['facet2'],
		facet3: request.params['facet3'],
		facet4: request.params['facet4']
		
	};
	// add to database
	database.add(data);

	// a reply
	// request.respond("Thanks your data was saved:");
	// after saving data, redirect to the visualization page
	request.redirect("/results");

	//callback function ??

}


function showData(request){
	// getAll gets all the records from the database
	// we need a call back fro when the data is ready
	database.getAll(gotData);

	function gotData(data){
		// generate a response with the data
		var output = '';
		for ( i = 0; i < data.length; i++){
			output += data[i].facet_one + ' ' + data[i].facet_two + "<br>";
		}
		request.respond(output); //?
	}
}


function jsonAPI(request){
	database.getAll(gotData);

	function gotData(data){
		// These second two arguments make it a little prettier
		// to look at
		request.respond(JSON.stringify(data), null,2);
	}
}



/////////////////////////////////////////////////
// start the server
start();