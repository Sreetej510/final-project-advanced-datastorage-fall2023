USE nike_store;

INSERT INTO Customers (first_name, last_name, email_address, phone_number)
VALUES ('John', 'Doe', 'johndoe@example.com', '123-456-7890'),
       ('Jane', 'Doe', 'janedoe@example.com', '987-654-3210'),
       ('Bob', 'Smith', 'bobsmith@example.com', '555-123-4567'),
       ('Alice', 'Johnson', 'alicejohnson@example.com', '555-987-6543'),
       ('Dave', 'Brown', 'davebrown@example.com', '555-555-5555');

INSERT INTO Categories (category_name)
VALUES ('Shoes'),
       ('Clothing'),
       ('Accessories');

INSERT INTO Products (product_name, price, description, category_id)
VALUES ('Air Max 270 React', 150.00, 'Lightweight and comfortable running shoes', 1),
       ('Sportswear Club Fleece', 45.00, 'Soft and comfortable sweatshirt', 2),
       ('Sportswear Essential Hip Pack', 25.00, 'Convenient and stylish hip pack', 3),
       ('TechKnit Ultra Long-Sleeve Top', 80.00, 'Breathable and sweat-wicking long-sleeve top', 2),
       ('Pro Hijab', 35.00, 'Lightweight and breathable hijab for athletes', 2);

INSERT INTO Orders (order_date, customer_id, total_price)
VALUES ('2022-04-01', 1, 150.00),
       ('2022-04-02', 2, 125.00),
       ('2022-04-03', 3, 80.00),
       ('2022-04-04', 4, 35.00),
       ('2022-04-05', 5, 250.00);

INSERT INTO Order_Items (order_id, product_id, quantity, price_per_unit)
VALUES (1, 1, 1, 150.00),
       (2, 2, 1, 45.00),
       (2, 3, 2, 12.50),
       (3, 4, 1, 80.00),
       (4, 5, 1, 35.00),
       (5, 1, 2, 125.00),
       (5, 2, 1, 45.00),
       (5, 3, 1, 25.00),
       (5, 4, 1, 80.00),
       (5, 5, 2, 35.00);
