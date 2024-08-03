CREATE TABLE IF NOT EXISTS tasks (
  id INT AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  description TEXT,
  completed TINYINT(1) DEFAULT 0
);

INSERT INTO tasks (title, description, completed) VALUES
    ('Task 1', 'Description 1', 0),
    ('Task 2', 'Description 2', 1),
    ('Task 3', 'Description 3', 0),
    ('Task 4', 'Description 4', 1),
    ('Task 5', 'Description 5', 0),
    ('Task 6', 'Description 6', 1),
    ('Task 7', 'Description 7', 0),
    ('Task 8', 'Description 8', 1),
    ('Task 9', 'Description 9', 0),
    ('Task 10', 'Description 10', 1);