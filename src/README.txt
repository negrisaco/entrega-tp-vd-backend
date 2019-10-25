El motor de base de datos utilizado es MySQL.

src/sql/database.sql contiene scrips sql para el correcto funcionamiento del backend y algunos datos iniciales
de prueba.

src/config/dbConnection.js contiene los datos para la correcta conexión con la BD, checkear usuario y contraseñas,
cambiarlos de ser necesario. En mi local use como usuario 'root' y contraseña 'password'.


Trabajo Práctico | Reclutamiento

Ejercicio 1 2
Ejercicio 2 3
Ejercicio 3 (opcional) 3

Entorno de trabajo
Se debe utilizar Node.Js como lenguaje de Backend
Se debe utilizar React, vue o angular.js
Se debe utilizar una base de datos relacional (SQL)
Se puede añadir puntos que no estén incluidos en el trabajo (test, docker, etc)

* Ejercicio 1

Una determinada Universidad necesita modelar materias, profesores y alumnos mediante la siguiente lógica.
Un profesor dicta varias materias, una materia es dictada únicamente por un profesores.
Un alumnos puede cursar varias materias y una materia puede ser cursada por más de un alumno.

Se pide:
Generar Servicios Web Restful con la posibilidad de Crear, Consultar y eliminar registros de cada una de estas entidades.


* Ejercicio 2

Se pide realizar un desarrollo front que integre las vistas con los servicios expuestos en el punto anterior (ABM de cada entidad).


* Ejercicio 3 (opcional)

Añadir una entidad usuario (con campos password y username), se debe agregar la funcionalidad el cual devolverá un JWT. Los servicios anteriores deben validar que el mismo sea válido y no se encuentre vencido.
Añadir una pantalla de login en las vistas del front.