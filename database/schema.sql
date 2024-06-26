-- Crear la base de datos
CREATE DATABASE IF NOT EXISTS autopartswerehouse;

-- Utilizar la base de datos recién creada
USE autopartswerehouse;

-- Crear la tabla de Productos
CREATE TABLE IF NOT EXISTS Productos (
    ID_Producto INT AUTO_INCREMENT PRIMARY KEY,
    Nombre VARCHAR(100),
    Codigo_Producto VARCHAR(50),
    Descripcion TEXT,
    Numero_Parte VARCHAR(50),
    Proveedor VARCHAR(100),
    Precio_Compra DECIMAL(10, 2),
    Precio_Venta DECIMAL(10, 2)
);

-- Crear la tabla de Ventas
CREATE TABLE IF NOT EXISTS Ventas (
    ID_Venta INT AUTO_INCREMENT PRIMARY KEY,
    Fecha DATE,
    ID_Cliente INT,
    ID_Producto INT,
    Cantidad INT,
    Precio_Unitario DECIMAL(10, 2),
    FOREIGN KEY (ID_Producto) REFERENCES Productos(ID_Producto)
    -- Agrega aquí la clave foránea a la tabla de Clientes si es necesario
);

-- Crear la tabla de Inventario
CREATE TABLE IF NOT EXISTS Inventario (
    ID_Inventario INT AUTO_INCREMENT PRIMARY KEY,
    ID_Producto INT,
    Cantidad_Disponible INT,
    Ubicacion VARCHAR(100),
    -- Otros detalles relevantes para el control de inventario
    FOREIGN KEY (ID_Producto) REFERENCES Productos(ID_Producto)
);

-- Crear la tabla de Garantías
CREATE TABLE IF NOT EXISTS Garantias (
    ID_Garantia INT AUTO_INCREMENT PRIMARY KEY,
    ID_Producto INT,
    Fecha_Compra DATE,
    Duracion INT, -- Duración en meses, años, etc.
    Terminos_Condiciones TEXT,
    FOREIGN KEY (ID_Producto) REFERENCES Productos(ID_Producto)
);

-- Crear la tabla de Usuarios (opcional)
CREATE TABLE IF NOT EXISTS Usuarios (
    ID_Usuario INT AUTO_INCREMENT PRIMARY KEY,
    Nombre_Usuario VARCHAR(50),
    Contraseña VARCHAR(50),
    Rol VARCHAR(50)
);