# bamazon

## Overview

Bamazon is a storefront app with two user interfaces: customer and manager. Customers are able to purchase items from a mysql database which automatically updates inventory levels. If customers attempt to purchase a higher quantity than is available, they are told the selected quantity is unavailable. If it is in stock, they are told how much their total is. 
Managers have the ability to view all inventory, view low inventory level only, replenish inventory, and add new items. 

## Prerequisites
Install before running: 
mysql
inquirer
columnify

## Instructions

run node bam.js to enter customer interface

![alt text](https://github.com/paigepittman/bamazon/blob/master/images/main%20menu.png?raw=true)

select items by ID to purchase

![alt text](/Users/paigepittman/Desktop/bamazon/images/shopping cart update.png)

if quantity chosen is more than inventory level, customer is informed and is redirected to continue shopping

![alt text](/Users/paigepittman/Desktop/bamazon/images/out of stock.png)

run node bamazonmanager.js to enter manager interface

![alt text](/Users/paigepittman/Desktop/bamazon/images/manager menu.png)

select "View Products for Sale" to see all items in stock

![alt text](/Users/paigepittman/Desktop/bamazon/images/view all.png)

select "View Low Inventory" to view only items with inventory below 5

![alt text](/Users/paigepittman/Desktop/bamazon/images/view low.png)

select "Add to inventory to replenish low inventory"

![alt text](/Users/paigepittman/Desktop/bamazon/images/add inv.png)

select "Add New Product" to add a new product to catalogue

![alt text](/Users/paigepittman/Desktop/bamazon/images/add new.png)

inventory levels and new item have been updated in database

![alt text](/Users/paigepittman/Desktop/bamazon/images/updated.png)
