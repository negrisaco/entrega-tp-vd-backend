ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'password';

DROP DATABASE IF EXISTS universidad;
CREATE DATABASE universidad CHARACTER SET utf8mb4;
USE universidad;

CREATE TABLE materia (
    codigo_materia INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    legajo_profesor_a INT REFERENCES profesor(legajo_profesor)
);

CREATE TABLE profesor (
    legajo_profesor INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    dni VARCHAR(9) UNIQUE,
    nombre VARCHAR(25) NOT NULL,
    apellido VARCHAR(50) NOT NULL,
    ciudad VARCHAR(25) NOT NULL,
    direccion VARCHAR(50) NOT NULL,
    telefono VARCHAR(9),
    fecha_nacimiento DATE NOT NULL
);

CREATE TABLE alumno (
    legajo INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    dni VARCHAR(9) UNIQUE,
    nombre VARCHAR(25) NOT NULL,
    apellido VARCHAR(50) NOT NULL,
    ciudad VARCHAR(25) NOT NULL,
    direccion VARCHAR(50) NOT NULL,
    telefono VARCHAR(9),
    fecha_nacimiento DATE NOT NULL,
    genero ENUM('H', 'M', 'O') NOT NULL
);

CREATE TABLE alumno_cursa_materia (
  id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  legajo_a INT REFERENCES alumno(legajo),
  codigo_materia_a INT REFERENCES materia(codigo_materia)
);

CREATE TRIGGER trigger_delete_profesor BEFORE DELETE ON profesor 
FOR each row
DELETE FROM materia WHERE legajo_profesor_a = OLD.legajo_profesor;


/* Materia */
INSERT INTO materia VALUES (1, 'Derecho I', 5);
INSERT INTO materia VALUES (2, 'Analisis Matematico', 1);
INSERT INTO materia VALUES (3, 'Contabilidad Basica', 4);
INSERT INTO materia VALUES (4, 'Anatomia', 3);
INSERT INTO materia VALUES (5, 'Programacion', 6);
INSERT INTO materia VALUES (6, 'Nutricion del Niño', 2);
INSERT INTO materia VALUES (7, 'Física I', 7);


 /* Alumnos */
INSERT INTO alumno VALUES (1, '26902806', 'Salvador', 'Sánchez', 'Buenos Aires', 'La Boca 12', '950254837', '1991/03/28', 'H');
INSERT INTO alumno VALUES (2, '89542419', 'Juan', 'Saez', 'Buenos Aires', 'Barrientos 5893', '618253876', '1992/08/08', 'H');
INSERT INTO alumno VALUES (3, '11105554', 'Zoe', 'Ramirez',  'Buenos Aires', 'Belgrano 123', '618223876', '1979/08/19', 'M');
INSERT INTO alumno VALUES (4, '17105885', 'Pedro', 'Heller',  'Buenos Aires', 'San Martin 7896', NULL, '2000/10/05', 'H');
INSERT INTO alumno VALUES (5, '38223286', 'David', 'Schmidt',  'Buenos Aires', 'Av. Rivadavia 13527', '678516294', '1978/01/19', 'H');
INSERT INTO alumno VALUES (6, '04233869', 'José', 'Koss',  'Buenos Aires', 'Arieta 2410', '628349590', '1998/01/28', 'H');
INSERT INTO alumno VALUES (7, '97258166', 'Ismael', 'Strosin',  'Buenos Aires', 'Juan B. Justo 7894', NULL, '1999/05/24', 'H');
INSERT INTO alumno VALUES (8, '79503962', 'Cristina', 'Lemke',  'Buenos Aires', 'Armonia 68541', '669162534', '1977/08/21', 'M');
INSERT INTO alumno VALUES (9, '82842571', 'Ramón', 'Herzog',  'Buenos Aires', 'Roselias 3548', '626351429', '1996/11/21', 'H');
INSERT INTO alumno VALUES (10, '61142000', 'Esther', 'Spencer',  'Buenos Aires', 'Campichuelo 2134', NULL, '1977/05/19', 'M');
INSERT INTO alumno VALUES (11, '46900725', 'Daniel', 'Herman',  'Buenos Aires', 'Rondeau 7685', '679837625', '1997/04/26', 'H');
INSERT INTO alumno VALUES (12, '85366986', 'Carmen', 'Streich',  'Buenos Aires', '24 de Noviembre 78654', NULL, '1971-04-29', 'M');
INSERT INTO alumno VALUES (13, '73571384', 'Alfredo', 'Stiedemann', 'Buenos Aires', 'Carlos Pellegrini 78946', '950896725', '1980/02/01', 'H');
INSERT INTO alumno VALUES (14, '82937751', 'Manolo', 'Hamill',  'Buenos Aires', 'Córdoba 6854', '950263514', '1977/01/02', 'H');
INSERT INTO alumno VALUES (15, '80502866', 'Alejandro', 'Kohler',  'Buenos Aires', 'Lavalle 321', '668726354', '1980/03/14', 'H');
INSERT INTO alumno VALUES (16, '10485008', 'Antonio', 'Fahey',  'Buenos Aires', 'Sierra de los Fiambres 885', NULL, '1982/03/18', 'H');
INSERT INTO alumno VALUES (17, '85869555', 'Guillermo', 'Ruecker',  'Buenos Aires', 'Sierra de Gádor 1158', NULL, '1973/05/05', 'H');
INSERT INTO alumno VALUES (18, '04326833', 'Micaela', 'Monahan', 'Buenos Aires', 'Veleta 3256', '662765413', '1976/02/25', 'H');
INSERT INTO alumno VALUES (19, '11578526', 'Inma', 'Lakin',  'Buenos Aires', 'Picos de Europa 4567', '678652431', '1998/09/01', 'M');
INSERT INTO alumno VALUES (20, '79221403', 'Francesca', 'Schowalter', 'Buenos Aires', 'Quinto pino 12', NULL, '1980/10/31', 'H');
INSERT INTO alumno VALUES (21, '79089577', 'Juan', 'Gutiérrez', 'Buenos Aires', 'Los pinos 27', '678652431', '1998/01/01', 'H');
INSERT INTO alumno VALUES (22, '41491230', 'Antonio',  'Guerrero', 'Buenos Aires', 'Cabo de Gata', '626652498', '1999/02/11', 'H');
INSERT INTO alumno VALUES (23, '64753215', 'Irene', 'Hernández',  'Buenos Aires', 'R. Zapillo 457', '628452384', '1996/03/12', 'M');
INSERT INTO alumno VALUES (24, '85135690', 'Sonia', 'Ruiz', 'Buenos Aires', 'B. Mercurio 345', '678812017', '1995/04/13', 'M');

/* Profesores */
INSERT INTO profesor VALUES (1, '26912306', 'Mauro', 'Sabone', 'Buenos Aires', 'Del Tejar 1569', '950253337', '1991/03/28');
INSERT INTO profesor VALUES (2, '89511119', 'Johana', 'Comito', 'Buenos Aires', 'Martinez 738', '610003876', '1992/08/08');
INSERT INTO profesor VALUES (3, '14405554', 'Florencia', 'Ovando',  'Buenos Aires', 'J. Vidal 1234', '611243876', '1979/08/19');
INSERT INTO profesor VALUES (4, '17358885', 'Maximo', 'Coseti',  'Buenos Aires', 'Colpayo 65487', NULL, '2000/10/05');
INSERT INTO profesor VALUES (5, '38456886', 'Gabriel', 'Speranza',  'Buenos Aires', 'Los Alerces 9784', NULL, '1978/01/19');
INSERT INTO profesor VALUES (6, '14299869', 'Karen', 'Esposito',  'Buenos Aires', 'Los Coihues 674', '625974590', '1998/01/28');
INSERT INTO profesor VALUES (7, '12255166', 'Romina', 'Pasternac',  'Buenos Aires', 'Rosas 7456', NULL, '1999/05/24');
INSERT INTO profesor VALUES (8, '79503111', 'Yanina', 'Ramone',  'Buenos Aires', 'Venteveo 978', '669160014', '1977/08/21');


/* Alumno_cursa_materia */
INSERT INTO alumno_cursa_materia VALUES (1, 1, 7);
INSERT INTO alumno_cursa_materia VALUES (2, 1, 5);
INSERT INTO alumno_cursa_materia VALUES (3, 2, 1);
INSERT INTO alumno_cursa_materia VALUES (4, 2, 3);
INSERT INTO alumno_cursa_materia VALUES (5, 3, 1);
INSERT INTO alumno_cursa_materia VALUES (6, 4, 3);
INSERT INTO alumno_cursa_materia VALUES (7, 5, 2);
INSERT INTO alumno_cursa_materia VALUES (8, 6, 3);
INSERT INTO alumno_cursa_materia VALUES (9, 7, 7);
INSERT INTO alumno_cursa_materia VALUES (10, 8, 2);
INSERT INTO alumno_cursa_materia VALUES (11, 9, 1);
INSERT INTO alumno_cursa_materia VALUES (12, 10, 2);
INSERT INTO alumno_cursa_materia VALUES (13, 11, 4);
INSERT INTO alumno_cursa_materia VALUES (14, 12, 7);
INSERT INTO alumno_cursa_materia VALUES (15, 13, 6);
INSERT INTO alumno_cursa_materia VALUES (16, 14, 5);
INSERT INTO alumno_cursa_materia VALUES (17, 15, 4);
INSERT INTO alumno_cursa_materia VALUES (18, 16, 1);
INSERT INTO alumno_cursa_materia VALUES (19, 17, 3);
INSERT INTO alumno_cursa_materia VALUES (20, 18, 2);
INSERT INTO alumno_cursa_materia VALUES (21, 19, 1);
INSERT INTO alumno_cursa_materia VALUES (22, 20, 4);
INSERT INTO alumno_cursa_materia VALUES (23, 21, 2);
INSERT INTO alumno_cursa_materia VALUES (24, 22, 3);
INSERT INTO alumno_cursa_materia VALUES (25, 23, 5);
INSERT INTO alumno_cursa_materia VALUES (26, 24, 6);
INSERT INTO alumno_cursa_materia VALUES (27, 24, 2);
INSERT INTO alumno_cursa_materia VALUES (28, 2, 1);
INSERT INTO alumno_cursa_materia VALUES (29, 7, 5);
INSERT INTO alumno_cursa_materia VALUES (30, 5, 4);
INSERT INTO alumno_cursa_materia VALUES (31, 7, 3);
INSERT INTO alumno_cursa_materia VALUES (32, 6, 5);
INSERT INTO alumno_cursa_materia VALUES (33, 8, 7);

/* Test Trigger */
DELETE FROM profesor WHERE legajo_profesor = 5;