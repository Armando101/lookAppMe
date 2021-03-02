-- To execute this script run
-- source script.sql in your MySql terminal

DROP DATABASE IF EXISTS lookAppMe;
CREATE DATABASE IF NOT EXISTS lookAppMe;
USE lookAppMe;


/* Tablas independientes (No tienen llave foranea) */
CREATE TABLE IF NOT EXISTS categorias (
	categoria_id INT NOT NULL AUTO_INCREMENT,
	nombre_categoria VARCHAR(30) NOT NULL, 
	PRIMARY KEY (categoria_id)
);


CREATE TABLE IF NOT EXISTS usuarios (
	usuario_id INT NOT NULL AUTO_INCREMENT,
	login VARCHAR(30) NOT NULL,
	password VARCHAR(32) NOT NULL,
	nickname VARCHAR(40) NOT NULL,
	email VARCHAR(40) NOT NULL UNIQUE,
	PRIMARY KEY (usuario_id)
);

/* Tabla dependientes (Tienen llave foranea) */
CREATE TABLE IF NOT EXISTS publicaciones (
	publicacion_id INT NOT NULL AUTO_INCREMENT,
	titulo VARCHAR(150) NOT NULL,
	fecha_publicacion TIMESTAMP,
	descripcion TEXT NOT NULL,
  precio FLOAT NOT NULL,
	estatus CHAR(8) DEFAULT 'Activo',

	usuario_id INT NOT NULL,
	categoria_id INT NOT NULL,
	
	PRIMARY KEY (publicacion_id),
	FOREIGN KEY (usuario_id) REFERENCES usuarios(usuario_id),
	FOREIGN KEY (categoria_id) REFERENCES categorias(categoria_id)
);


CREATE TABLE IF NOT EXISTS ropa (
	ropa_id INT NOT NULL AUTO_INCREMENT,
	nombre_ropa VARCHAR(30) NOT NULL, 
	talla_ropa VARCHAR(30) NOT NULL, 
	genero_ropa VARCHAR(30) NOT NULL,

  usuario_id INT NOT NULL,
  publicacion_id INT NOT NULL,

	PRIMARY KEY (ropa_id),
  FOREIGN KEY (usuario_id) REFERENCES usuarios(usuario_id),
  FOREIGN KEY (publicacion_id) REFERENCES publicaciones(publicacion_id)
);

/* Tablas transitivas */
-- Sirven como puente par unir dos tablas cuya relación es M-M. No tienen contendido semántico 

CREATE TABLE IF NOT EXISTS usuarios_publicaciones (
	usuarios_publicaciones_id INT NOT NULL AUTO_INCREMENT,
	usuario_id INT NOT NULL,
	publicacion_id INT NOT  NULL,

	PRIMARY KEY (usuarios_publicaciones_id),
	FOREIGN KEY (usuario_id) REFERENCES usuarios(usuario_id),
	FOREIGN KEY (publicacion_id) REFERENCES publicaciones(publicacion_id)
);

DESCRIBE categorias;
DESCRIBE usuarios;
DESCRIBE publicaciones;
DESCRIBE ropa;
DESCRIBE usuarios_publicaciones;