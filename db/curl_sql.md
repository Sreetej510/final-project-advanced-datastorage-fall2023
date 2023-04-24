-- SELECT statements
SELECT * FROM Customers;
SELECT * FROM Products;
SELECT * FROM Categories;
SELECT * FROM Orders;
SELECT * FROM Order_Items;

-- INSERT statement
INSERT INTO Customers (first_name, last_name, email_address, phone_number)
VALUES ('Susan', 'Johnson', 'susanjohnson@email.com', '479-555-2345');

-- UPDATE statement
UPDATE Products
SET price = 139.99
WHERE product_id = 1;