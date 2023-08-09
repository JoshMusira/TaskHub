CREATE TABLE users (
  userID INT PRIMARY KEY,
  username VARCHAR(50) NOT NULL,
  password VARCHAR(100) NOT NULL
);

CREATE TABLE task (
  id INT PRIMARY KEY,
  userID INT NOT NULL,
  name VARCHAR(100) NOT NULL,
  date DATE NOT NULL,
  status VARCHAR(20) NOT NULL,
  FOREIGN KEY (userID) REFERENCES users(userID)
);
