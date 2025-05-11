create database OAM;
use OAm;

 create table Farmer
(
 FarmerID int AUTO_INCREMENT primary key ,
 FirstName VARCHAR(40),                                                    
 LastName VARCHAR(40),
 EmailID VARCHAR(20) unique key,
 Password CHAR(20) ,
 Gender CHAR(8), 
 DOB date,
 AadharNo CHAR(12),
 MobileNo CHAR(10) unique key,
 LicenceNumber CHAR(10),
 APMC CHAR(20),
BankName CHAR(50),
 BranchName CHAR(20),
 AccountType char(20),
 AccountNumber bigint,
Role varchar(10),
 X1 CHAR(10),
 X2 CHAR(10));
 
 ALTER TABLE farmer AUTO_INCREMENT=1001;
  alter table farmer modify AadharNo BIGINT ;
alter table farmer modify MobileNo BIGINT ;

alter table farmer modify AadharNo BIGINT 
CHECK(AadharNo BETWEEN 100000000000 and 999999999999);
alter table farmer modify MobileNo BIGINT  
CHECK(MobileNo BETWEEN 1000000000 and 9999999999 );

insert into Farmer values(1001,'Sakharam','Pate','sakharam@gmail.com','skharampw','Male','1956/04/11',
951264387921,9713105621,'MHPU12531N','PUNE','SBI','KATRAJ',
'SAVING',2143598280,'Farmer',null,null);

 create table Vendor
(
 VendorID int AUTO_INCREMENT primary key,
 FirstName VARCHAR(40),
 LastName VARCHAR(40),
 EmailID VARCHAR(20),
 Password CHAR(20),
 Gender CHAR(10), 
 DOB date,
 AadharNo CHAR(12),
 MobileNo CHAR(10) unique key ,
 LicenceNumber CHAR(10),
 APMC CHAR(20),
  BankName CHAR(50),
 BranchName CHAR(20),
 AccountType char(20),
 AccountNumber bigint,
Role varchar(10),
  X1 CHAR(10) ,
 X2 CHAR(10));
 
  ALTER TABLE vendor AUTO_INCREMENT=2001;
  
  insert into Vendor values(1,'Vikas','Patil','vikas@gmail.com','vikaspw','Male','1967/06/16',
933459207521,9221603619,'MHTH12624L','THANE','AXIS BANK','VARTAK NAGAR','CURRENT',2134617802,'vendor',null,null);


  
   create table Address(
AddressID int AUTO_INCREMENT primary key,
 City varchar(20),
 PinCode MEDIUMINT ,
 Tehsil varchar(20),
 District varchar(20),
 State varchar(20),
 FarmerID int ,
VendorID int ,
constraint fk_farm_ID foreign key(FarmerID) references Farmer(FarmerID) on delete cascade on update cascade,
constraint fk_vend_ID foreign key(VendorID) references Vendor(VendorID) on delete cascade on update cascade

);


insert into Address values(1,'Ahamednagar',413736,'Ahmednagar','Ahamednagr','Maharashtra',1001,null);



create table Category
(
CategoryID int AUTO_INCREMENT primary key,
Cat_Type VARCHAR(10)
);
select * from category;

  ALTER TABLE category AUTO_INCREMENT=4001;
  
Insert into Category(Cat_Type) values('Cereal');
Insert into Category(Cat_Type) values('Pulses');
Insert into Category(Cat_Type) values('Fruits');
Insert into Category(Cat_Type) values('Vegetables');
  
  
  create table Products
(
 ProductID int AUTO_INCREMENT primary key,
 ProductName CHAR(20),
CategoryID int,
 Price CHAR(10), 
Unit char(10),
 X1 CHAR(10),
 X2 CHAR(10),
constraint fk_cat_Product foreign key( CategoryID) references Category( CategoryID) on delete cascade on update cascade

 );
 
   ALTER TABLE products AUTO_INCREMENT=5001;
   
   
Insert into Products(productid, ProductName,CategoryID, Price,Unit) values(5001,'Wheat',4001,  2700, 'PerQuintal'),
(5002,'Rice',4001, 4500, 'PerQuintal'),
   (5003,'jowar',4001, 3500, 'PerQuintal'),
   (5004,'Bajara', 4001,5000, 'PerQuintal'),
   (5005,'Moogdal',4002, 5000, 'PerQuintal'),
(5006,'Chanadal',4002, 5000, 'PerQuintal'),
(5007,'Turdal',4004, 50, 'PerQuintal'),
(5008,'Onion',4004, 30, 'PerKg'),
(5009,'potato',4004, 40, 'Perkg'),
(5010,'Tomato',4004, 30 , 'Perkg'),
(5011,'LadyFinger',4004, 30, 'PerKg'),
(5012,'Carrot',4004, 20, 'PerKg'),
(5013,'Chilli',4004, 30, 'PerKg'),
(5014,'Brinjal',4003, 90, 'PerKg'),
(5015,'Apple',4003, 60, 'PerKg'),
(5016,'Grapes',4003, 90, 'PerDozen'),
(5017,'Banana',4003, 1000, 'PerKg'),
(5018,'Almond',4003, 600, 'PerKg');

   
   
   
create table Auction
(
 AuctionID int auto_increment primary key,
 
 FarmerID int,
 VendorID int,
 
  fpid int,
 BiddingPrice double,
 Quantity int,
 Biddate Date,
 X1 CHAR(10),
 X2 CHAR(10),

 constraint fk_farm_Ord_ID foreign key(FarmerID) references farmer(FarmerID) on delete cascade on update cascade,
 constraint fk_vend_Ord_ID foreign key(VendorID) references vendor(VendorID)  on delete cascade on update cascade
 
 );
 
 drop table finalorders;
drop table auction;
drop table orders;
  ALTER TABLE auction AUTO_INCREMENT=8001;
  
  
insert into Auction values('8001','2021/03/29','1001','1','5001',2500,2700,2,null,null,null,null,null);
insert into Auction values('8002','2021/03/29','1001','1','5002',2500,2850,2,null,null,null,null,null);
  
  create table Counter
(
 CtrName CHAR(10) primary key,
 CtrValue int,
 X1 varchar(10),
 X2 varchar(10)
);

create table Orders
(
 OrderID int,
 AuctionID int,
 BidAmount double,
 AuctionDate DATE,
 PaymentStatus VARCHAR(20),
 X1 CHAR(10),
 X2 CHAR(10),
 X3 CHAR(10),
 X4 CHAR(10),
 X5 CHAR(10),
 constraint fk_Auc_ID foreign key(AuctionID) references Auction(AuctionID) on delete cascade on update cascade

);

Create table Quality
(
QualityId int AUTO_INCREMENT primary key,
Rating char(10),
Increment int
);
  ALTER TABLE quality AUTO_INCREMENT=6001;
  
  
Insert into  Quality(Rating,Increment) values('0-5', 1);
Insert into  Quality(Rating,Increment) values('6-7', 10);
Insert into  Quality(Rating,Increment) values('8-9', 15);
Insert into  Quality(Rating,Increment) values('10', 20);
  
  Create table FarmerProduct
(
Fpid int AUTO_INCREMENT primary key,
FarmerID int,
CategoryID int,
ProductID int,
QualityID int,
OrderDate date,
Quantity int,
Unit char(15),
 constraint fk_farm_fprod_ID foreign key( FarmerID) references Farmer( FarmerID) on delete cascade on update cascade,
constraint fk_vend_fprod_ID foreign key( CategoryID) references Category(CategoryID) on delete cascade on update cascade,
constraint fk_cat_fprod_ID foreign key( ProductID) references Products( ProductID) on delete cascade on update cascade,
constraint fk_quat_fprod_ID foreign key( QualityID) references Quality( QualityID) on delete cascade on update cascade

);
   ALTER TABLE farmerproduct AUTO_INCREMENT=7001;
   
   Insert into FarmerProduct (FarmerID,CategoryID,ProductID,QualityID,OrderDate,Quantity,unit) values (1001,4001,5001,6001,'2022/04/04',50,5);
   
   
   Create table FinalOrders
(
finalid int primary key auto_increment ,
AuctionID int not null,
VendorID int not null ,
 Fpid int unique not null,
 constraint fk_auct_FinalOrder foreign key(AuctionID) references Auction( AuctionID) on delete cascade on update cascade,
 constraint fk_vend_FinalOrder foreign key(VendorID) references vendor(VendorID)on delete cascade on update cascade,
 constraint fk_farm_FinalOrder foreign key(Fpid) references FarmerProduct(Fpid)on delete cascade on update cascade
);

ALTER TABLE Finalorders AUTO_INCREMENT=9001;














select VendorID from Auction where BiddingPrice=(select max(BiddingPrice) from Auction where ProductID='5001');




insert into Vendor values(2,'Vikas','Patil','vikas@gmail.com','vikaspw','Male','1967/06/16',
933459207532,9321603619,'MHTH12624L','THANE','AXIS BANK','VARTAK NAGAR','CURRENT',2134617802,'vendor',null,null);

insert into Vendor values(3,'Murli','Reddy','murli@gmail.com','murlipw','Male','1996/05/18',
993401207532,9021473319,'KA12039L','KARNATAKA','HDFC','BELGAON','CURRENT',2124841828,'vendor',null,null);



select * from category;
select * from products;
select * from quality;
select * from auction;
select * from vendor;



desc farmer;

desc address;
   
show tables;

use oam;

select * from auction;
select * from vendor;
select * from farmer;
select * from products;
select * from farmerproduct;
select * from category;
-----------------------------------------Newupdate-------------------------
alter table farmer add column address mediumtext;
alter table farmer add column state varchar(20);

drop table finalorders;
drop table orders;

delete from products;

Insert into Products(productid, ProductName,CategoryID, Price,Unit) values(5001,'Wheat',4001,  2700, 'PerQuintal'),
(5002,'Rice',4001, 4500, 'PerQuintal'),
   (5003,'jowar',4001, 3500, 'PerQuintal'),
   (5004,'Bajara', 4001,5000, 'PerQuintal'),
   (5005,'Moogdal',4002, 5000, 'PerQuintal'),
(5006,'Chanadal',4002, 5000, 'PerQuintal'),
(5007,'Turdal',4004, 50, 'PerQuintal'),
(5008,'Onion',4004, 30, 'PerKg'),
(5009,'potato',4004, 40, 'Perkg'),
(5010,'Tomato',4004, 30 , 'Perkg'),
(5011,'LadyFinger',4004, 30, 'PerKg'),
(5012,'Carrot',4004, 20, 'PerKg'),
(5013,'Chilli',4004, 30, 'PerKg'),
(5014,'Brinjal',4003, 90, 'PerKg'),
(5015,'Apple',4003, 60, 'PerKg'),
(5016,'Grapes',4003, 90, 'PerDozen'),
(5017,'Banana',4003, 1000, 'PerKg'),
(5018,'Almond',4003, 600, 'PerKg');
 
 alter table vendor add column address mediumtext;
alter table vendor add column state varchar(20);


    drop table auction;
       
create table Auction
(
 AuctionID int auto_increment primary key,
  FarmerID int,
 VendorID int,
   fpid int,
 BiddingPrice double,
 Quantity int,
 Biddate Date,
 X1 CHAR(10),
 X2 CHAR(10),
 constraint fk_farm_Ord_ID foreign key(FarmerID) references farmer(FarmerID) on delete cascade on update cascade,
 constraint fk_vend_Ord_ID foreign key(VendorID) references vendor(VendorID)  on delete cascade on update cascade
 
 );
 
  ALTER TABLE auction AUTO_INCREMENT=8001;
 


        Create table FinalOrders
(
finalid int primary key auto_increment ,
AuctionID int not null,
VendorID int not null ,
 Fpid int unique not null,
 farmerid int,
 constraint fk_auct_FinalOrder foreign key(AuctionID) references Auction( AuctionID) on delete cascade on update cascade,
 constraint fk_vend_FinalOrder foreign key(VendorID) references vendor(VendorID)on delete cascade on update cascade,
 constraint fk_farm_FinalOrder foreign key(Fpid) references FarmerProduct(Fpid)on delete cascade on update cascade,
 constraint fk_farmer_FinalOrder foreign key(farmerid) references Farmerproduct(farmerid)on delete cascade on update cascade
);

ALTER TABLE Finalorders AUTO_INCREMENT=9001;

select * from finalorders;