-- MySQL dump 10.13  Distrib 8.0.33, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: kitchening
-- ------------------------------------------------------
-- Server version	8.0.33

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Temporary view structure for view `algunos_datos_productos`
--

DROP TABLE IF EXISTS `algunos_datos_productos`;
/*!50001 DROP VIEW IF EXISTS `algunos_datos_productos`*/;
SET @saved_cs_client     = @@character_set_client;
/*!50503 SET character_set_client = utf8mb4 */;
/*!50001 CREATE VIEW `algunos_datos_productos` AS SELECT 
 1 AS `title`,
 1 AS `description`,
 1 AS `price`,
 1 AS `imagePrincipal`*/;
SET character_set_client = @saved_cs_client;

--
-- Table structure for table `chefs`
--

DROP TABLE IF EXISTS `chefs`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `chefs` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `image` varchar(60) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `chefs`
--

LOCK TABLES `chefs` WRITE;
/*!40000 ALTER TABLE `chefs` DISABLE KEYS */;
INSERT INTO `chefs` VALUES (1,'Jose Diaz','jose.png');
/*!40000 ALTER TABLE `chefs` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `images_products`
--

DROP TABLE IF EXISTS `images_products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `images_products` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `value` varchar(60) NOT NULL,
  `id_product` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `id_product` (`id_product`),
  CONSTRAINT `images_products_ibfk_1` FOREIGN KEY (`id_product`) REFERENCES `products` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `images_products`
--

LOCK TABLES `images_products` WRITE;
/*!40000 ALTER TABLE `images_products` DISABLE KEYS */;
INSERT INTO `images_products` VALUES (2,'panaderiaCasera2.jpg',3);
/*!40000 ALTER TABLE `images_products` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `products`
--

DROP TABLE IF EXISTS `products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `products` (
  `id` int NOT NULL AUTO_INCREMENT,
  `title` varchar(100) NOT NULL,
  `price` decimal(10,2) NOT NULL,
  `description` text,
  `imagePrincipal` varchar(60) DEFAULT 'img-default.png',
  `sale` tinyint DEFAULT '0',
  `newest` tinyint DEFAULT '0',
  `free` tinyint DEFAULT '0',
  `available` tinyint DEFAULT '1',
  `id_chef` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `id_chef` (`id_chef`),
  CONSTRAINT `products_ibfk_1` FOREIGN KEY (`id_chef`) REFERENCES `chefs` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products`
--

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
INSERT INTO `products` VALUES (1,'ABCD DE LA COCINA',9530.00,'Tu comida puede transformarse en platos de restaurante de la mano de Guillermo Calabrese que te enseñará a combinar ingredientes simples con productos gourmet para darle un sabor distinto a tus recetas.','img-default.png',0,0,0,0,NULL),(2,'COCTELERÍA Y BEBIDAS',9720.00,'Si querés ser Bartender hay conocimientos que debes tener y el   \nCubano Vega te da la fórmula para que prepares los tragos y bebidas más pedidos.','cocteleria.jpg',1,1,0,1,NULL),(3,'PANADERÍA CASERA',10530.00,'En este curso aprenderás todas las tecnicas básicas de la panadería casera y artesanal. En cada elaboración tendrás un soporte teórico y demostrativo para comprender el proceso que se realiza en cada producto, las diferentes formas y el paso a paso fundamental de las variedades más relevantes de la panadería.','panaderiaCasera.jpg',0,0,0,1,1),(4,'TEST 1',1234312.00,'En este curso aprenderás todas las tecnicas básicas de la panadería casera y artesanal. En cada elaboración tendrás un soporte teórico y demostrativo para ASDSADASHDASde las variedades más relevantes de la panadería.','panaderiaCasera.jpg',0,0,0,1,NULL),(5,'TEST 2',14534.00,'ASADSDSA DAS DASD SAD ASD ASD AS DASDAS ADSASD ASD ADSADSAD S','img-default.png',0,0,0,1,NULL),(6,'test 3',213123.00,'sadasdadsasdasdadsdas','img-default.png',0,0,0,1,NULL);
/*!40000 ALTER TABLE `products` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Final view structure for view `algunos_datos_productos`
--

/*!50001 DROP VIEW IF EXISTS `algunos_datos_productos`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8mb4 */;
/*!50001 SET character_set_results     = utf8mb4 */;
/*!50001 SET collation_connection      = utf8mb4_0900_ai_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`root`@`localhost` SQL SECURITY DEFINER */
/*!50001 VIEW `algunos_datos_productos` AS select `products`.`title` AS `title`,`products`.`description` AS `description`,`products`.`price` AS `price`,`products`.`imagePrincipal` AS `imagePrincipal` from `products` where ((`products`.`price` > 9700) and (`products`.`price` < 10000)) */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-04-05 21:11:38
