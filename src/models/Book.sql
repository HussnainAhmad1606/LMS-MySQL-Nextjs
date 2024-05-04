CREATE TABLE books (
    id INT PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(100),
    author VARCHAR(100),
    category VARCHAR(50),
    quantity INT,
    rent_price_per_day DECIMAL(10, 2) -- Assuming rent price is in decimal format with 2 decimal places
);
INSERT INTO books (title, author, category, quantity, rent_price_per_day) VALUES ('To Kill a Mockingbird', 'Harper Lee', 'Fiction', 5, 1.99), ('1984', 'George Orwell', 'Science Fiction', 3, 2.50), ('Pride and Prejudice', 'Jane Austen', 'Classic', 7, 1.75), ('The Great Gatsby', 'F. Scott Fitzgerald', 'Classic', 4, 2.25), ('Harry Potter and the Philosopher''s Stone', 'J.K. Rowling', 'Fantasy', 6, 2.75)