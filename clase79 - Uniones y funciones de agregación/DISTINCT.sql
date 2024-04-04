-- DISTINCT
SELECT DISTINCT pais FROM musimundos.clientes;


-- EJEMPLO INTEGRADOR
SELECT DISTINCT a.first_name, a.first_name FROM movies_db.movies m
INNER JOIN movies_db.actor_movie am
ON am.movie_id = m.id
INNER JOIN movies_db.actors a
ON a.id = am.actor_id
WHERE m.title LIKE '%Harry Potter%';