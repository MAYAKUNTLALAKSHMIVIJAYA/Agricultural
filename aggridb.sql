CREATE DATABASE  IF NOT EXISTS `oam` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `oam`;
-- MySQL dump 10.13  Distrib 8.0.41, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: oam
-- ------------------------------------------------------
-- Server version	8.0.41

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
-- Table structure for table `address`
--

DROP TABLE IF EXISTS `address`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `address` (
  `AddressID` int NOT NULL AUTO_INCREMENT,
  `City` varchar(20) DEFAULT NULL,
  `PinCode` mediumint DEFAULT NULL,
  `Tehsil` varchar(20) DEFAULT NULL,
  `District` varchar(20) DEFAULT NULL,
  `State` varchar(20) DEFAULT NULL,
  `FarmerID` int DEFAULT NULL,
  `VendorID` int DEFAULT NULL,
  PRIMARY KEY (`AddressID`),
  KEY `fk_farm_ID` (`FarmerID`),
  KEY `fk_vend_ID` (`VendorID`),
  CONSTRAINT `fk_farm_ID` FOREIGN KEY (`FarmerID`) REFERENCES `farmer` (`FarmerID`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `fk_vend_ID` FOREIGN KEY (`VendorID`) REFERENCES `vendor` (`VendorID`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `address`
--

LOCK TABLES `address` WRITE;
/*!40000 ALTER TABLE `address` DISABLE KEYS */;
INSERT INTO `address` VALUES (1,'Ahamednagar',413736,'Ahmednagar','Ahamednagr','Maharashtra',1001,NULL);
/*!40000 ALTER TABLE `address` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `auction`
--

DROP TABLE IF EXISTS `auction`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `auction` (
  `AuctionID` int NOT NULL AUTO_INCREMENT,
  `FarmerID` int DEFAULT NULL,
  `VendorID` int DEFAULT NULL,
  `fpid` int DEFAULT NULL,
  `BiddingPrice` double DEFAULT NULL,
  `Quantity` int DEFAULT NULL,
  `Biddate` date DEFAULT NULL,
  `X1` char(10) DEFAULT NULL,
  `X2` char(10) DEFAULT NULL,
  PRIMARY KEY (`AuctionID`),
  KEY `fk_farm_Ord_ID` (`FarmerID`),
  KEY `fk_vend_Ord_ID` (`VendorID`),
  CONSTRAINT `fk_farm_Ord_ID` FOREIGN KEY (`FarmerID`) REFERENCES `farmer` (`FarmerID`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `fk_vend_Ord_ID` FOREIGN KEY (`VendorID`) REFERENCES `vendor` (`VendorID`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=8002 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `auction`
--

LOCK TABLES `auction` WRITE;
/*!40000 ALTER TABLE `auction` DISABLE KEYS */;
INSERT INTO `auction` VALUES (8001,NULL,2001,7002,123,10,'2025-05-11',NULL,NULL);
/*!40000 ALTER TABLE `auction` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `category`
--

DROP TABLE IF EXISTS `category`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `category` (
  `CategoryID` int NOT NULL AUTO_INCREMENT,
  `Cat_Type` varchar(10) DEFAULT NULL,
  PRIMARY KEY (`CategoryID`)
) ENGINE=InnoDB AUTO_INCREMENT=4005 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `category`
--

LOCK TABLES `category` WRITE;
/*!40000 ALTER TABLE `category` DISABLE KEYS */;
INSERT INTO `category` VALUES (4001,'Cereal'),(4002,'Pulses'),(4003,'Fruits'),(4004,'Vegetables');
/*!40000 ALTER TABLE `category` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `counter`
--

DROP TABLE IF EXISTS `counter`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `counter` (
  `CtrName` char(10) NOT NULL,
  `CtrValue` int DEFAULT NULL,
  `X1` varchar(10) DEFAULT NULL,
  `X2` varchar(10) DEFAULT NULL,
  PRIMARY KEY (`CtrName`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `counter`
--

LOCK TABLES `counter` WRITE;
/*!40000 ALTER TABLE `counter` DISABLE KEYS */;
/*!40000 ALTER TABLE `counter` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `farmer`
--

DROP TABLE IF EXISTS `farmer`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `farmer` (
  `FarmerID` int NOT NULL AUTO_INCREMENT,
  `FirstName` varchar(40) DEFAULT NULL,
  `LastName` varchar(40) DEFAULT NULL,
  `EmailID` varchar(20) DEFAULT NULL,
  `Password` char(20) DEFAULT NULL,
  `Gender` char(8) DEFAULT NULL,
  `DOB` date DEFAULT NULL,
  `AadharNo` bigint DEFAULT NULL,
  `MobileNo` bigint DEFAULT NULL,
  `LicenceNumber` char(10) DEFAULT NULL,
  `APMC` char(20) DEFAULT NULL,
  `BankName` char(50) DEFAULT NULL,
  `BranchName` char(20) DEFAULT NULL,
  `AccountType` char(20) DEFAULT NULL,
  `AccountNumber` bigint DEFAULT NULL,
  `Role` varchar(10) DEFAULT NULL,
  `X1` char(10) DEFAULT NULL,
  `X2` char(10) DEFAULT NULL,
  `state` varchar(20) DEFAULT NULL,
  `address` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`FarmerID`),
  UNIQUE KEY `EmailID` (`EmailID`),
  UNIQUE KEY `MobileNo` (`MobileNo`),
  CONSTRAINT `farmer_chk_1` CHECK ((`AadharNo` between 100000000000 and 999999999999)),
  CONSTRAINT `farmer_chk_2` CHECK ((`MobileNo` between 1000000000 and 9999999999))
) ENGINE=InnoDB AUTO_INCREMENT=1003 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `farmer`
--

LOCK TABLES `farmer` WRITE;
/*!40000 ALTER TABLE `farmer` DISABLE KEYS */;
INSERT INTO `farmer` VALUES (1001,'Sakharam','Pate','sakharam@gmail.com','skharampw','Male','1956-04-11',951264387921,9713105621,'MHPU12531N','PUNE','SBI','KATRAJ','SAVING',2143598280,'Farmer',NULL,NULL,NULL,NULL),(1002,'abc','abc','abc@gmail.com','abc@123','Male','2025-04-27',123456789123,1234567890,'1234','apmc','sbi','dmm','Saving',1234567812345678,'Farmer',NULL,NULL,'AP','abc');
/*!40000 ALTER TABLE `farmer` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `farmerproduct`
--

DROP TABLE IF EXISTS `farmerproduct`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `farmerproduct` (
  `Fpid` int NOT NULL AUTO_INCREMENT,
  `FarmerID` int DEFAULT NULL,
  `CategoryID` int DEFAULT NULL,
  `ProductID` int DEFAULT NULL,
  `QualityID` int DEFAULT NULL,
  `OrderDate` date DEFAULT NULL,
  `Quantity` int DEFAULT NULL,
  `Unit` char(15) DEFAULT NULL,
  PRIMARY KEY (`Fpid`),
  KEY `fk_farm_fprod_ID` (`FarmerID`),
  KEY `fk_vend_fprod_ID` (`CategoryID`),
  KEY `fk_cat_fprod_ID` (`ProductID`),
  KEY `fk_quat_fprod_ID` (`QualityID`),
  CONSTRAINT `fk_cat_fprod_ID` FOREIGN KEY (`ProductID`) REFERENCES `products` (`ProductID`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `fk_farm_fprod_ID` FOREIGN KEY (`FarmerID`) REFERENCES `farmer` (`FarmerID`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `fk_quat_fprod_ID` FOREIGN KEY (`QualityID`) REFERENCES `quality` (`QualityId`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `fk_vend_fprod_ID` FOREIGN KEY (`CategoryID`) REFERENCES `category` (`CategoryID`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=7004 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `farmerproduct`
--

LOCK TABLES `farmerproduct` WRITE;
/*!40000 ALTER TABLE `farmerproduct` DISABLE KEYS */;
INSERT INTO `farmerproduct` VALUES (7001,1001,4001,5001,6001,'2022-04-04',50,'5'),(7002,1002,4002,5001,6001,'2025-05-11',12,'Kg'),(7003,1002,4003,5017,6001,'2025-05-11',12,'Kg');
/*!40000 ALTER TABLE `farmerproduct` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `finalorders`
--

DROP TABLE IF EXISTS `finalorders`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `finalorders` (
  `finalid` int NOT NULL AUTO_INCREMENT,
  `AuctionID` int NOT NULL,
  `VendorID` int NOT NULL,
  `Fpid` int NOT NULL,
  `farmerid` int DEFAULT NULL,
  PRIMARY KEY (`finalid`),
  UNIQUE KEY `Fpid` (`Fpid`),
  KEY `fk_auct_FinalOrder` (`AuctionID`),
  KEY `fk_vend_FinalOrder` (`VendorID`),
  KEY `fk_farmer_FinalOrder` (`farmerid`),
  CONSTRAINT `fk_auct_FinalOrder` FOREIGN KEY (`AuctionID`) REFERENCES `auction` (`AuctionID`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `fk_farm_FinalOrder` FOREIGN KEY (`Fpid`) REFERENCES `farmerproduct` (`Fpid`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `fk_farmer_FinalOrder` FOREIGN KEY (`farmerid`) REFERENCES `farmerproduct` (`FarmerID`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `fk_vend_FinalOrder` FOREIGN KEY (`VendorID`) REFERENCES `vendor` (`VendorID`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=9002 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `finalorders`
--

LOCK TABLES `finalorders` WRITE;
/*!40000 ALTER TABLE `finalorders` DISABLE KEYS */;
INSERT INTO `finalorders` VALUES (9001,8001,2001,7002,1002);
/*!40000 ALTER TABLE `finalorders` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `products`
--

DROP TABLE IF EXISTS `products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `products` (
  `ProductID` int NOT NULL AUTO_INCREMENT,
  `ProductName` char(20) DEFAULT NULL,
  `CategoryID` int DEFAULT NULL,
  `Price` char(10) DEFAULT NULL,
  `Unit` char(10) DEFAULT NULL,
  `X1` char(10) DEFAULT NULL,
  `X2` char(10) DEFAULT NULL,
  PRIMARY KEY (`ProductID`),
  KEY `fk_cat_Product` (`CategoryID`),
  CONSTRAINT `fk_cat_Product` FOREIGN KEY (`CategoryID`) REFERENCES `category` (`CategoryID`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=5019 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products`
--

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
INSERT INTO `products` VALUES (5001,'Wheat',4001,'2700','PerQuintal',NULL,NULL),(5002,'Rice',4001,'4500','PerQuintal',NULL,NULL),(5003,'jowar',4001,'3500','PerQuintal',NULL,NULL),(5004,'Bajara',4001,'5000','PerQuintal',NULL,NULL),(5005,'Moogdal',4002,'5000','PerQuintal',NULL,NULL),(5006,'Chanadal',4002,'5000','PerQuintal',NULL,NULL),(5007,'Turdal',4004,'50','PerQuintal',NULL,NULL),(5008,'Onion',4004,'30','PerKg',NULL,NULL),(5009,'potato',4004,'40','Perkg',NULL,NULL),(5010,'Tomato',4004,'30','Perkg',NULL,NULL),(5011,'LadyFinger',4004,'30','PerKg',NULL,NULL),(5012,'Carrot',4004,'20','PerKg',NULL,NULL),(5013,'Chilli',4004,'30','PerKg',NULL,NULL),(5014,'Brinjal',4003,'90','PerKg',NULL,NULL),(5015,'Apple',4003,'60','PerKg',NULL,NULL),(5016,'Grapes',4003,'90','PerDozen',NULL,NULL),(5017,'Banana',4003,'1000','PerKg',NULL,NULL),(5018,'Almond',4003,'600','PerKg',NULL,NULL);
/*!40000 ALTER TABLE `products` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `quality`
--

DROP TABLE IF EXISTS `quality`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `quality` (
  `QualityId` int NOT NULL AUTO_INCREMENT,
  `Rating` char(10) DEFAULT NULL,
  `Increment` int DEFAULT NULL,
  PRIMARY KEY (`QualityId`)
) ENGINE=InnoDB AUTO_INCREMENT=6005 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `quality`
--

LOCK TABLES `quality` WRITE;
/*!40000 ALTER TABLE `quality` DISABLE KEYS */;
INSERT INTO `quality` VALUES (6001,'0-5',1),(6002,'6-7',10),(6003,'8-9',15),(6004,'10',20);
/*!40000 ALTER TABLE `quality` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `vendor`
--

DROP TABLE IF EXISTS `vendor`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `vendor` (
  `VendorID` int NOT NULL AUTO_INCREMENT,
  `FirstName` varchar(40) DEFAULT NULL,
  `LastName` varchar(40) DEFAULT NULL,
  `EmailID` varchar(20) DEFAULT NULL,
  `Password` char(20) DEFAULT NULL,
  `Gender` char(10) DEFAULT NULL,
  `DOB` date DEFAULT NULL,
  `AadharNo` char(12) DEFAULT NULL,
  `MobileNo` char(10) DEFAULT NULL,
  `LicenceNumber` char(10) DEFAULT NULL,
  `APMC` char(20) DEFAULT NULL,
  `BankName` char(50) DEFAULT NULL,
  `BranchName` char(20) DEFAULT NULL,
  `AccountType` char(20) DEFAULT NULL,
  `AccountNumber` bigint DEFAULT NULL,
  `Role` varchar(10) DEFAULT NULL,
  `X1` char(10) DEFAULT NULL,
  `X2` char(10) DEFAULT NULL,
  `address` mediumtext,
  `state` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`VendorID`),
  UNIQUE KEY `MobileNo` (`MobileNo`)
) ENGINE=InnoDB AUTO_INCREMENT=2002 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `vendor`
--

LOCK TABLES `vendor` WRITE;
/*!40000 ALTER TABLE `vendor` DISABLE KEYS */;
INSERT INTO `vendor` VALUES (1,'Vikas','Patil','vikas@gmail.com','vikaspw','Male','1967-06-16','933459207521','9221603619','MHTH12624L','THANE','AXIS BANK','VARTAK NAGAR','CURRENT',2134617802,'vendor',NULL,NULL,NULL,NULL),(2,'Vikas','Patil','vikas@gmail.com','vikaspw','Male','1967-06-16','933459207532','9321603619','MHTH12624L','THANE','AXIS BANK','VARTAK NAGAR','CURRENT',2134617802,'vendor',NULL,NULL,NULL,NULL),(3,'Murli','Reddy','murli@gmail.com','murlipw','Male','1996-05-18','993401207532','9021473319','KA12039L','KARNATAKA','HDFC','BELGAON','CURRENT',2124841828,'vendor',NULL,NULL,NULL,NULL),(2001,'sneha','sneha','sneha@gmail.com','sneha@123','Female','2025-04-14','123456123456','1234123411','12379','apmc','sbi','allagadda','Saving',1234123412341234,'Vendor',NULL,NULL,'hello','AP');
/*!40000 ALTER TABLE `vendor` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2025-05-11  4:17:07
