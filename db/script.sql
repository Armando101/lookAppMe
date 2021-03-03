-- To execute this script run
-- source script.sql in your MySql terminal

DROP DATABASE IF EXISTS lookAppMe2;
CREATE DATABASE IF NOT EXISTS lookAppMe2;
USE lookAppMe2;


/* Tablas independientes (No tienen llave foranea) */
CREATE TABLE IF NOT EXISTS categorias (
	idCategoria INT NOT NULL AUTO_INCREMENT,
	nombre_categoria VARCHAR(30) NOT NULL, 
	PRIMARY KEY (idCategoria)
);


CREATE TABLE IF NOT EXISTS usuarios (
	idUsuario INT NOT NULL AUTO_INCREMENT,
	login VARCHAR(30) NOT NULL,
	password VARCHAR(32) NOT NULL,
	nickname VARCHAR(40) NOT NULL,
	email VARCHAR(40) NOT NULL UNIQUE,
	tipoUsuario ENUM('comprador','vendedor') NOT NULL,
	PRIMARY KEY (idUsuario)
);

/* Tabla dependientes (Tienen llave foranea) */
CREATE TABLE IF NOT EXISTS publicaciones(
	idPublicacion INT NOT NULL AUTO_INCREMENT,
	titulo VARCHAR(150) NOT NULL,
	fecha_publicacion TIMESTAMP,
	descripcion TEXT NOT NULL,
	estatus CHAR(8) DEFAULT 'Activo',

	idUsuario INT NOT NULL,
	
	PRIMARY KEY (idPublicacion),
	FOREIGN KEY (idUsuario) REFERENCES usuarios(idUsuario)
);


CREATE TABLE IF NOT EXISTS articulos (
	idArticulo INT NOT NULL AUTO_INCREMENT,
	nombre VARCHAR(30) NOT NULL, 
	precio FLOAT NOT NULL, 
	descripcion VARCHAR(30) NOT NULL,
	estatus CHAR(10) NOT NULL, /* Usado, Seminuevo, Nuevo*/

	idCategoria INT NOT NULL,
	idVendedor INT NOT NULL,

	PRIMARY KEY (idArticulo),
    FOREIGN KEY (idVendedor) REFERENCES usuarios(idUsuario),
FOREIGN KEY (idCategoria ) REFERENCES categorias(idCategoria )
);

/* Tablas transitivas */
-- Sirven como puente par unir dos tablas cuya relación es M-M. No tienen contendido semántico 

CREATE TABLE IF NOT EXISTS usuarios_publicaciones (
	idUsuariosPublicaciones INT NOT NULL AUTO_INCREMENT,
	idUsuario INT NOT NULL,
	idPublicacion INT NOT  NULL,

	PRIMARY KEY (idUsuariosPublicaciones),
	FOREIGN KEY (idUsuario) REFERENCES usuarios(idUsuario),
	FOREIGN KEY (idPublicacion) REFERENCES publicaciones(idPublicacion)
);

CREATE TABLE IF NOT EXISTS ventas (
	idVenta INT NOT NULL AUTO_INCREMENT,
	idArticulo INT NOT NULL,
	idComprador INT NOT  NULL,
	idVendedor INT NOT  NULL,
	fecha TIMESTAMP NOT  NULL,

	PRIMARY KEY (idVenta),
	FOREIGN KEY (idArticulo) REFERENCES articulos(idArticulo),
	FOREIGN KEY (idComprador) REFERENCES usuarios(idUsuario),
	FOREIGN KEY (idVendedor) REFERENCES usuarios(idUsuario)
);

DESCRIBE categorias;
DESCRIBE usuarios;
DESCRIBE publicaciones;
DESCRIBE articulos;
DESCRIBE usuarios_publicaciones;
DESCRIBE ventas;