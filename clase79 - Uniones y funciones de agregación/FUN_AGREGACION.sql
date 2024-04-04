-- FUNCIONES AGREGACION (COUNT, AVG, SUM, MIN, MAX)
SELECT COUNT(*) FROM movies_db.series;
SELECT COUNT(*) FROM movies_db.movies;

-- COUNT
SELECT (CASE WHEN (SELECT COUNT(*) FROM movies_db.series) > (SELECT COUNT(*) FROM movies_db.movies) 
THEN 'Hay mas series que peliculas' 
ELSE 'Hay mas peliculas que series' END) AS Msg FROM (SELECT 1) AS DUMMY;

-- AVG
SELECT principal_title , ROUND(AVG(length) / 60, 2) horas FROM movies GROUP BY principal_title;

-- SUM
SELECT principal_title, SUM(awards) FROM movies_db.movies GROUP BY principal_title;
SELECT SUM(total) FROM musimundos.facturas;
SELECT * FROM musimundos.facturas;

-- MAX
SELECT * FROM (SELECT principal_title, SUM(awards) premios FROM movies_db.movies GROUP BY principal_title) T0 WHERE premios = (SELECT MAX(T1.premios) FROM (SELECT principal_title, SUM(awards) premios FROM movies_db.movies GROUP BY principal_title) T1);
SELECT MAX(total) FROM musimundos.facturas;

-- MIN
SELECT principal_title, MIN(awards) FROM movies_db.movies GROUP BY principal_title;
SELECT MIN(total) FROM musimundos.facturas;