SELECT * FROM movies;

SELECT * FROM genres;

-- INNER JOIN
SELECT m.id, m.title, m.rating, m.release_date, g.name 
FROM movies_db.movies m
INNER JOIN movies_db.genres g
ON g.id = m.genre_id;


-- LEFT JOIN
SELECT * FROM movies_db.movies m
LEFT JOIN movies_db.genres g
ON g.id = m.genre_id;


SELECT * FROM movies_db.genres g
LEFT JOIN movies_db.movies m
ON m.genre_id = g.id;

-- RIGHT JOIN
SELECT * FROM movies_db.actors a
RIGHT JOIN movies_db.movies m
ON m.id = a.favorite_movie_id;

SELECT * FROM movies_db.movies m
RIGHT JOIN movies_db.actors a
ON a.favorite_movie_id = m.id
WHERE m.title LIKE '%Story%2';


----------------------
-- DISTINCT
SELECT DISTINCT pais FROM musimundos.clientes;


-- EJEMPLO INTEGRADOR
SELECT DISTINCT CONCAT(a.first_name,' ',a.last_name) Actores FROM movies_db.movies m
INNER JOIN movies_db.actor_movie am
ON am.movie_id = m.id
INNER JOIN movies_db.actors a
ON a.id = am.actor_id
WHERE m.title LIKE 'Harry%';


-- GROUP BY
SELECT a.first_name, a.last_name FROM movies_db.movies m
INNER JOIN movies_db.actor_movie am
ON am.movie_id = m.id
INNER JOIN movies_db.actors a
ON a.id = am.actor_id
WHERE m.title LIKE 'Harry%'
GROUP BY a.first_name, a.last_name;



-- FUNCIONES DE AGREGACIÓN

-- COUNT
-- SELECT COUNT(*) FROM movies_db.movies WHERE genre_id IS NOT NULL AND awards > 5;
SELECT COUNT(*) FROM movies_db.movies;
SELECT COUNT(*) FROM movies_db.series;

SELECT CASE 
WHEN (SELECT COUNT(*) FROM movies_db.movies) > (SELECT COUNT(*) FROM movies_db.series)
THEN CONCAT('La base de datos tiene mas peliculas que series, Cantidad peliculas = ', (SELECT COUNT(*) FROM movies_db.movies))
ELSE CONCAT('La base de datos tiene mas series que peliculas', (SELECT COUNT(*) FROM movies_db.series))
END AS RESPUESTA
FROM (SELECT 1) AS DUMMY;

-- AVG
SELECT AVG(m.length) FROM movies_db.movies m;
SELECT m.principal_title, AVG(m.length) FROM movies_db.movies m GROUP BY m.principal_title;

-- SUM
SELECT SUM(total) FROM musimundos.facturas;
SELECT fecha_factura, SUM(total) FROM musimundos.facturas GROUP BY fecha_factura;

-- MAX
SELECT fecha_factura, MAX(total) FROM musimundos.facturas;

-- MIN
SELECT fecha_factura, MIN(total) FROM musimundos.facturas GROUP BY fecha_factura;

SELECT *
FROM musimundos.facturas
WHERE total = (SELECT MIN(total) FROM musimundos.facturas)
AND fecha_factura = (SELECT MAX(fecha_factura) FROM musimundos.facturas);

-- HAVING

SELECT m.principal_title, 
AVG(m.length) AS promedio_tiempo
FROM movies_db.movies m 
WHERE m.principal_title <> 'Titanic'
GROUP BY m.principal_title
HAVING promedio_tiempo < 150
LIMIT 4 OFFSET 4;

