-- INNER JOIN
SELECT m.* FROM movies_db.movies m
INNER JOIN genres g
ON g.id = m.genre_id;

-- LEFT JOIN 
SELECT m.*,g.name FROM movies_db.movies m
LEFT JOIN movies_db.genres g
ON g.id = m.genre_id;

-- RIGHT JOIN
SELECT a.first_name,a.last_name,m.title AS "Peli favorita" FROM movies_db.actors a
RIGHT JOIN movies_db.movies m
ON m.id = a.favorite_movie_id;