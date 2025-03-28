CREATE SEQUENCE users_id_seq START WITH 1 INCREMENT BY 1;

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(50) UNIQUE NOT NULL,
    names VARCHAR(50) NOT NULL,
    lastnames VARCHAR(50) NOT NULL,
    age INT CHECK (age >= 18) NOT NULL,
    gender VARCHAR(10) CHECK (gender IN ('Masculino', 'Femenino')) NOT NULL,
    password TEXT NOT NULL,
    email VARCHAR(50) UNIQUE NOT NULL  
);

ALTER SEQUENCE users_id_seq OWNED BY users.id;
