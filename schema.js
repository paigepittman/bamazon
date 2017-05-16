USE bamazon_db;

CREATE TABLE products (
	id  INT AUTO_INCREMENT NOT NULL,
    product_name VARCHAR(50),
    department_name VARCHAR(50),
    price INT(10),
    PRIMARY KEY (id)
);

SELECT * FROM products

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Star Wars Battlefront", "games", 49.99, 40);
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("X-Box ", "electronics", 199.99, 100);
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Macbook Pro", "electronics", 1800.00, 75);
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Malibu Barbie", "toys", 12.50, 30);
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Halo 5", "games", 44.99, 45);
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("white crew neck 5 pk", "apparel", 10.00, 20);
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("college ruled notebook", "office supplies", 4.00, 100);
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("push pins", "office supplies", 3.00, 10 );