var mysql = require("mysql");
var inquirer = require("inquirer");
var columnify = require('columnify');
var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,

  user: "root",

  password: "alison",
  database: "bamazon_db"
});

connection.connect(function(err) {
  if (err) throw err;
});

var itemsArr = [];
var menu = [];
var selection;
var x;
var columns;



console.log("-----------------------------------------------------");
console.log("-----------------------------------------------------");
console.log("                     BAMAZON                         ");
console.log("-----------------------------------------------------");
console.log("-----------------------------------------------------");

var shop = function() {
	connection.query("SELECT * FROM products", function(err, results) {
		if (err) throw (err);
		console.log("");
		console.log("");
		console.log("ID" + "   |   " + "NAME" + "   |   " + "DEPT" + "   |   " + "PRICE");
		for (var i = 0; i < results.length; i++) {

			console.log(results[i].id + "  |  " + results[i].product_name + "  |  " + results[i].department_name + "   |   " + results[i].price);
		}
		console.log("");
		console.log("");
		
		// for (var i = 0; i < results.length; i++) {
		// 		itemsArr.push(
		// 		{
		// 			id: results[i].id,
		// 			name: results[i].product_name,
		// 			price: results[i].price,
		// 			stock: results[i].stock_quantity
		// 		}
		// 		);
			
		inquirer.prompt([
		{
		type: "input",
		name: "items",			
		message: "Enter item number to purchase",
		},
		{
		type: "input",
		name: "quantity",
		message: "enter quantity",
			validate: function(value) {
				if (isNaN(value) === false) {
				    return true;
				    // console.log("true");
				}
				    return false;
				    // console.log("false")
					}
		}
	]).then(function(answer) {
		console.log(answer.quantity);
		x = answer.items - 1;

			
			if (results[x].stock_quantity < parseInt(answer.quantity)) {
				// console.log("in stock: " selection)
				console.log("Not enough in stock!");
				console.log("");
				console.log("---------------------------------------------------");
				console.log("---------------------------------------------------");
				console.log("");
				console.log("continue shopping");
				console.log("");
				shop();
			
		}
		if (results[x].stock_quantity > parseInt(answer.quantity)) {
				var newQuantity = results[x].stock_quantity - answer.quantity
			connection.query("UPDATE products SET ? WHERE ?", [{
				stock_quantity: newQuantity
			},{
				id: x+1
			}], function(error) {
				if (error) throw err;
				console.log("You shopping cart has been updated! Your total is " + results[x].price);
				console.log("");
				console.log("---------------------------------------------------");
				console.log("---------------------------------------------------");
				console.log("");
				console.log("continue shopping");
				console.log("");


				shop();
				}
			);
			
		};
	});
				

				});
		}
		
		
	
	

shop();

