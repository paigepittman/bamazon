var mysql = require("mysql");
var inquirer = require("inquirer");
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



var shop = function() {
	connection.query("SELECT * FROM products", function(err, results) {
		if (err) throw (err);
		inquirer.prompt([
		{
		type: "rawlist",
		name: "items",
		choices: function() {
			var itemsArr = [];
			for (var i = 0; i < results.length; i++) {
				itemsArr.push(
				{
					id: results[i].id,
					name: results[i].product_name
					price: results[i].price
				}
				);
			}
			return itemsArr;
		},
		message: "Enter item number to purchase"
	}
	]).then(function(answer) {
		var selection;
		for (var i = 0; i < results.length; i++) {
			if (results[i].stock_quantity > 0) {
				inquirer.prompt([
				{
					type: "input",
					name: "quantity",
					message: "enter quantity",
					validate: function(value) {
				      if (isNaN(value) === false) {
				        return true;
				      }
				      return false;
					}
				}
				]).then(function(num) {
					var totalLeft = results[i].stock_quantity - parseInt(answer.quantity);
					if (totalLeft >= 0) {
						"your shopping cart has been updated!"
					connection.query("UPDATE products SET ? WHERE ?", [{
						stock_quantity: totalLeft
					},{
					id: selection.id
					}
					}
					])
					}
					else 
				}
			}
		}
	}	
	}

	
}