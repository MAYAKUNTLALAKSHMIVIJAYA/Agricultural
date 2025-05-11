package com.met.dapm.Dao;



import java.util.Collection;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.met.dapm.model.Auction;
import com.met.dapm.model.Finalorders;



public interface FinalorderRepository extends JpaRepository<Finalorders, Integer> {
	
	@Query(value =  "SELECT finalid,auctionid,vendorid,fpid,farmerID FROM Finalorders  where farmerID = ?1 " ,nativeQuery = true)
	public Collection< Finalorders> getFinalorderByFid(int fpid);
	
	@Query(value =  "SELECT finalid,auctionid,vendorid,fpid,farmerID FROM Finalorders  where vendorid = ?1 " ,nativeQuery = true)
	public Collection< Finalorders> getFinalorderByVendorid(int vendorid);

}
