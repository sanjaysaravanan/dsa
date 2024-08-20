CREATE DATABASE IF NOT EXISTS SampleDB;
GO
USE SampleDB;
CREATE TABLE Inventory (
   id INT,
   name NVARCHAR(50),
   quantity INT,
   PRIMARY KEY (id)
);
INSERT INTO Inventory VALUES (3, 'banana', 150);
INSERT INTO Inventory VALUES (4, 'orange', 154);

SELECT * FROM Inventory;
GO