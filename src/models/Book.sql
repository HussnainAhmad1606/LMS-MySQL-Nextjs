CREATE TABLE books (
    id INT PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(100),
    author VARCHAR(100),
    category VARCHAR(50),
    quantity INT,
    rent_price_per_day DECIMAL(10, 2) -- Assuming rent price is in decimal format with 2 decimal places
);
INSERT INTO books (title, author, category, quantity, rent_price_per_day) VALUES ('To Kill a Mockingbird', 'Harper Lee', 'Fiction', 5, 1.99), ('1984', 'George Orwell', 'Science Fiction', 3, 2.50), ('Pride and Prejudice', 'Jane Austen', 'Classic', 7, 1.75), ('The Great Gatsby', 'F. Scott Fitzgerald', 'Classic', 4, 2.25), ('Harry Potter and the Philosopher''s Stone', 'J.K. Rowling', 'Fantasy', 6, 2.75)

DELIMITER //

CREATE TRIGGER after_borrowbook_insert
AFTER INSERT ON borrowbook
FOR EACH ROW
BEGIN
    DECLARE current_quantity INT;

    -- Get the current quantity of the book being borrowed
    SELECT quantity INTO current_quantity
    FROM books
    WHERE id = NEW.bookId;

    -- Decrease the quantity by 1
    UPDATE books
    SET quantity = current_quantity - 1
    WHERE id = NEW.bookId;
END;
//

DELIMITER ;


DELIMITER //

CREATE TRIGGER after_borrowBook_delete
AFTER DELETE ON borrowBook
FOR EACH ROW
BEGIN
    DECLARE current_quantity INT;

    -- Get the current quantity of the book being returned
    SELECT quantity INTO current_quantity
    FROM books
    WHERE id = OLD.bookId;

    -- Increase the quantity by 1
    UPDATE books
    SET quantity = current_quantity + 1
    WHERE id = OLD.bookId;
END;
//

DELIMITER ;
