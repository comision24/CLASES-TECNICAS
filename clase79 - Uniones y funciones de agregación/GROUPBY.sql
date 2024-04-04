-- GROUP BY
SELECT YEAR(end_date),COUNT(title) AS cantidad FROM movies_db.series
GROUP BY YEAR(end_date)
HAVING cantidad > 1;

