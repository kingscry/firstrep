-- Connect as SYSTEM user
ALTER SESSION SET CONTAINER = XEPDB1;

-- Create a new user for the application
CREATE USER gatepass IDENTIFIED BY "your_secure_password_here";
GRANT CONNECT, RESOURCE TO gatepass;
GRANT UNLIMITED TABLESPACE TO gatepass;
GRANT CREATE SESSION TO gatepass;

-- Connect as the new gatepass user
CONNECT gatepass/"your_secure_password_here"@localhost:1521/XEPDB1

-- Create the users table
CREATE TABLE users (
  id NUMBER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  username VARCHAR2(50) UNIQUE NOT NULL,
  email VARCHAR2(100) UNIQUE NOT NULL,
  password VARCHAR2(100) NOT NULL
);

-- Optionally, you can add some test data
INSERT INTO users (username, email, password) VALUES ('testuser', 'test@example.com', 'password123');

COMMIT;