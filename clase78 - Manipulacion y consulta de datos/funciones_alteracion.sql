

-- CONCAT
SELECT CONCAT(primer_nombre, ' ',apellido) AS nombre_completo 
FROM clientes 
WHERE CONCAT(primer_nombre, ' ',apellido) LIKE 'Ma%'
ORDER BY nombre_completo DESC
LIMIT 10 OFFSET 0;

-- COALESCE
SELECT * FROM clientes;

SELECT 
COALESCE(empresa,'No definido por estar NULO') 
FROM clientes;

SELECT 
CONCAT(
'El cliente ', 
primer_nombre, 
' ', 
apellido, 
' vive en ', 
direccion ,
' en la ciudad de ', 
COALESCE( ciudad, codigo_postal, 'no definido' ),
COALESCE( CONCAT(' y el nombre de la empresa es ', empresa),'' ) 
) as oracion
FROM clientes;


-- UPDATE clientes SET codigo_postal = NULL WHERE id = 1


-- DATEDIFF
SELECT DATEDIFF('2024-02-02' ,'2022-02-02');
SELECT DATEDIFF(CURRENT_DATE() , '2023-12-25');

-- EXTRACT
SELECT EXTRACT(DAY FROM CURRENT_DATE());
SELECT EXTRACT(MONTH FROM CURRENT_DATE());
SELECT EXTRACT(YEAR FROM CURRENT_DATE());
SELECT EXTRACT(WEEK FROM CURRENT_DATE());

SELECT EXTRACT(SECOND FROM CURRENT_TIME());
SELECT EXTRACT(MINUTE FROM CURRENT_TIME());
SELECT EXTRACT(HOUR FROM CURRENT_TIME());

SELECT MINUTE(CURRENT_TIME());
SELECT YEAR('2022-02-02');

SELECT YEAR(fecha_nacimiento) anio_nacimiento FROM empleados;

-- REPLACE
SELECT REPLACE(titulo,'Support','Soporte') FROM empleados;

-- DATE_FORMAT  (https://www.w3schools.com/sql/func_mysql_date_format.asp)
SELECT DATE_FORMAT(CURRENT_DATE(), '%a %b %Y');

-- CASE
SELECT 
id_cliente,
direccion_de_facturacion,
pais_de_facturacion,
total,
(
	CASE 
    WHEN total < 3 THEN 'facturación baja (total < 3)'
    WHEN total < 6 THEN 'facturación regular ( total < 6)'
    WHEN total < 10 THEN 'facturación media (total < 10)'
    ELSE 'facturación alta (total > 9)'
    END
) AS nivel_facturacion
FROM facturas;


