CREATE TABLE borrowBook (
    id INT PRIMARY KEY AUTO_INCREMENT,
    bookId INT,
    studentId INT,
    studentName TEXT,
    librarian TEXT,
    FOREIGN KEY (bookId) REFERENCES books(id),
);

ALTER TABLE users ADD INDEX idx_users_id (id)
ALTER TABLE books ADD INDEX idx_books_id (id)

