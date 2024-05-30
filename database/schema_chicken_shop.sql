CREATE DATABASE chicken_shop;

USE chicken_shop;

CREATE TABLE inventory (
    id INT AUTO_INCREMENT PRIMARY KEY, -- Identificador único para cada pieza de pollo.
    name VARCHAR(255) NOT NULL, -- Nombre de la pieza de pollo.
    quantity INT NOT NULL, -- Cantidad disponible de la pieza de pollo.
    price DECIMAL(10, 2) NOT NULL -- Precio de la pieza de pollo.
);

CREATE TABLE accounting (
    id INT AUTO_INCREMENT PRIMARY KEY, -- Identificador único para cada registro contable.
    date DATETIME NOT NULL, -- Fecha y hora del registro.
    description VARCHAR(255) NOT NULL, -- Descripción de la transacción.
    amount DECIMAL(10, 2) NOT NULL -- Monto de la transacción.
);

CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY, -- Identificador único para cada usuario.
    username VARCHAR(255) NOT NULL, -- Nombre de usuario.
    password VARCHAR(255) NOT NULL, -- Contraseña del usuario (hasheada para seguridad).
    role VARCHAR(50) NOT NULL --Rol del usuario (e.g., admin, cashier).
);

CREATE TABLE roles (
    id INT AUTO_INCREMENT PRIMARY KEY, -- Identificador único para cada rol.
    role_name VARCHAR(50) NOT NULL, -- Nombre del rol (e.g., admin, cashier).
    permissions VARCHAR(255) NOT NULL -- Permisos asociados al rol.
);
