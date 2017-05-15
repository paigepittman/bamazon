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

console.log("-----------------------------------------------------");
console.log("-----------------------------------------------------");
console.log("                 BAMAZON MANAGER                     ");
console.log("-----------------------------------------------------");
console.log("-----------------------------------------------------");

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

function viewProducts() {
connection.query("SELECT * FROM products", function(err, results) {
		if (err) throw (err);
		console.log("");
		console.log("");
		console.log("ID" + "   |   " + "NAME" + "   |   " + "DEPT" + "   |   " + "PRICE" + "   |   " + "ON HAND INVENTORY");
		for (var i = 0; i < results.length; i++) {

			console.log(results[i].id + "  |  " + results[i].product_name + "  |  " + results[i].department_name + "   |   " + results[i].price + "   |   " + results[i].stock_quantity);
		}
		console.log("");
		console.log("");
		
});
};

function lowInventory() {

};

function addInventory() {

};

function newProduct() {

};






