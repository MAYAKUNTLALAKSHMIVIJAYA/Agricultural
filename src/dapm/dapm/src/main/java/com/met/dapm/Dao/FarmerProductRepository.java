package com.met.dapm.Dao;

import java.sql.Date;
import java.util.Collection;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.met.dapm.model.Farmerproduct;



public interface FarmerProductRepository extends JpaRepository<Farmerproduct,Integer> {
	
	@Query(value =  "SELECT fpid,farmerid,productid,categoryid,qualityid,quantity,unit,orderdate FROM Farmerproduct  where farmerID = ?1 " ,nativeQuery = true)
	public Collection<Farmerproduct> getfarmerproducts(int id);
	
	
	@Query(value =  "SELECT fpid,farmerid,productid,categoryid,qualityid,quantity,unit,orderdate FROM Farmerproduct  where categoryID = ?1 " ,nativeQuery = true)
	public Collection<Farmerproduct> getProductsByCategory(int id);
	
	@Query(value =  "SELECT fpid,farmerid,productid,categoryid,qualityid,quantity,unit,orderdate FROM Farmerproduct  where productID = ?1 " ,nativeQuery = true)
	public Collection<Farmerproduct> getProductsByproductid(int id);
	
	@Query(value =  "SELECT fpid,farmerid,productid,categoryid,qualityid,quantity,unit,orderdate FROM Farmerproduct  where qualityID = ?1 and categoryid=?2" ,nativeQuery = true)
	public Collection<Farmerproduct> getProductsByQuality(int qualityid,int categoryid);

	@Query(value =  "insert into farmerproduct(farmerid,categoryid,productid,qualityid,orderdate,quantity,unit) values(?1,?2,?3,?4,?5,?6,?7)" ,nativeQuery = true)
	public void savep(int farmerid,int categoryid,int productid,int qualityid,Date orderdare,int quantity,String unit);
	
	
	public Farmerproduct getByFpid(int id) ;
	}


