var prompt = require("prompt");
var mysql = require("mysql");

var connection = mysql.createConnection({
	host : "localhost",
	user : "root",
	password : "",
	database : "Bamazon"
});

connection.connect(function(err){
  if(err){
    console.log('Error connecting to Db');
    return;
  }
  console.log('Connection established');

  // connection.query("SELECT * FROM Products", function(err, res) {
		// 		  if (err) throw err;
		// 		  console.log(res);
		// });

	prompt.get(["id", "howMany"], function (err, result) {
	    if (err){
	        console.log(err)
	    }

		var CustomerPickID = parseInt(result.id);
		var CustomerQuantity = parseInt(result.howMany);

		console.log("id=" + CustomerPickID, "how many=" + CustomerQuantity);

		function selectID(){
			connection.query('SELECT * FROM Products WHERE ItemID =' + CustomerPickID, function(err, res) { 
				if (err) throw err;
				console.log(res);
			});
		};

		selectID();	
	});
		// var query = connection.query('INSERT INTO Products SET ?', post, function(err, result) { 
		// });

	

		// if (stockQuantity<=0){
		// 	console.log("Insufficient quantity");
		// }
		// else{
		// UPDATE Products SET stockQuantity = x WHERE id = x
		// };

});

