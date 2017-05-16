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
var x;

connection.connect(function(err) {
  if (err) throw err;
});

console.log("-----------------------------------------------------");
console.log("-----------------------------------------------------");
console.log("                 BAMAZON MANAGER                     ");
console.log("-----------------------------------------------------");
console.log("-----------------------------------------------------");

lowArray();
manager();

function lowArray() {
	connection.query("SELECT * FROM products", function(err, results) {
		for (var i = 0; i < results.length; i++) {
			if (results[i].stock_quantity < 5) {
				low.push(results[i]);
			}
		}
	});
};
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
		columns = columnify(low,{columnSplitter: '     |     '})
		console.log(columns);
		console.log("");
		manager(); 

};

function addInventory() {
			columns = columnify(low,{columnSplitter: '     |     '})
			console.log(columns);
			console.log("");
	connection.query("SELECT * FROM products", function(err, results) {	
	inquirer.prompt([
		{
			type: "input",
			name: "items",			
			message: "Enter item number to update",
			},
			{
			type: "input",
			name: "quantity",
			message: "enter quantity added",
				validate: function(value) {
					if (isNaN(value) === false) {
					    return true;    
					}
					    return false;
						}

		}]).then(function(answer) {
			x = answer.items - 1;
			var newQuantity = results[x].stock_quantity + parseInt(answer.quantity);
			connection.query("UPDATE products SET ? WHERE ?",[{
				stock_quantity: newQuantity
			},{
				id: x+1
			}])
			console.log("item restocked!");
			manager();
		});
	});
};

function newProduct() {
	inquirer.prompt([
		{
			type: "input",
			name: "name",
			message: "enter product name"
		},
		{
			type: "input",
			name: "price",
			message: "enter price"
		},
		{
			type: "input",
			name: "dept",
			message: "enter department"
		},
		{
			type: "input",
			name: "stock",
			message: "enter stock quantity"
		}
	]).then(function(product) {
		connection.query("INSERT INTO products SET ?", {
			product_name: product.name,
			price: product.price,
			department_name: product.dept,
			stock_quantity: product.stock
		});
		console.log("item added!");
		manager();
	});	
};






