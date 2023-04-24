# Nike Store Database MySQL

This database(MySQL database) models a mock online store for Nike products. It includes the following tables:

## Customers
- customer_id (primary key)
- first_name
- last_name
- email_address
- phone_number

FDs: None.

Foreign Key Constraints: None.

Sample Data:
| customer_id | first_name | last_name | email_address          | phone_number |
|-------------|------------|-----------|------------------------|--------------|
| 1           | John       | Doe       | johndoe@email.com      | 555-1234     |
| 2           | Jane       | Smith     | janesmith@email.com    | 555-5678     |

## Products
- product_id (primary key)
- product_name
- price
- description
- category_id (foreign key references Categories(category_id))

FDs: product_id -> product_name, price, description; category_id -> category_name

Foreign Key Constraints: category_id references Categories(category_id)

Sample Data:
| product_id | product_name               | price  | description          | category_id |
|------------|----------------------------|--------|----------------------|-------------|
| 1          | Air Max 270 React          | 150.00 | Lightweight and ...  | 1           |
| 1          | Sportswear Club Fleece     | 45.00  | Soft and com...      | 2           |
| 1          | Sportswear Essential H..   | 25.00  | Convenient and ...   | 3           |

## Categories
- category_id (primary key)
- category_name

FDs: category_id -> category_name

Foreign Key Constraints: None.

Sample Data:
| category_id | category_name |
|-------------|---------------|
| 1           | Shoes         |
| 2           | Clothing       |

## Orders
- order_id (primary key)
- order_date
- customer_id (foreign key references Customers(customer_id))
- total_price

FDs: order_id -> order_date, customer_id, total_price

Foreign Key Constraints: customer_id references Customers(customer_id)

Sample Data:
| order_id | order_date | customer_id | total_price |
|----------|------------|-------------|-------------|
| 1        | 2022-04-01 | 1           | 150.00      |
| 2        | 2022-04-02 | 2           | 125.00      |

## Order_Items
- order_item_id (primary key)
- order_id (foreign key references Orders(order_id))
- product_id (foreign key references Products(product_id))
- quantity
- price_per_unit

FDs: order_item_id -> order_id, product_id, quantity, price_per_unit

Foreign Key Constraints: order_id references Orders(order_id), product_id references Products(product_id)

Sample Data:
| order_item_id | order_id | product_id | quantity | price_per_unit |
|---------------|----------|------------|----------|----------------|
| 1             | 1        | 1          | 1        | 150.00         |
| 2             | 2        | 2          | 1        | 45.00          |
| 3             | 2        | 3          | 2        | 12.50          |