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

var low = [];

connection.connect(function(err) {
  if (err) throw err;
});

console.log("-----------------------------------------------------");
console.log("-----------------------------------------------------");
console.log("                 BAMAZON MANAGER                     ");
console.log("-----------------------------------------------------");
console.log("-----------------------------------------------------");

manager();

function manager() {
	inquirer.prompt([
	{
		type: "list",
		name: "manage",
		choices: ["View Products for Sale", "View Low Inventory", "Add to Inventory", "Add New Product"],
		message: "What would you like to do?"
	}]).then(function(response) {
		switch (response.manage) {
			case "View Products for Sale":
			viewProducts();
			break;

			case "View Low Inventory":
			lowInventory();
			break;

			case "Add to Inventory":
			addInventory();
			break;

			case "Add New Product":
			newProduct();
			break;
		}
	});
};
function viewProducts() {
	connection.query("SELECT * FROM products", function(err, results) {
			if (err) throw (err);
			console.log("");
			console.log("");
			columns = columnify(results, {columnSplitter: '   |   '});
			console.log(columns);
			console.log("");
			console.log("");
			manager();				
	});
};

function lowInventory() {
	
	connection.query("SELECT * FROM products", function(err, results) {
		for (var i = 0; i < results.length; i++) {
			if (results[i].stock_quantity < 5) {
				low.push(results[i]);
			}
		}
		columns = columnify(low,{columnSplitter: '     |     '})
		console.log(columns);
		console.log("");
		manager(); 
	});

};

function addInventory() {


};

function newProduct() {

};






