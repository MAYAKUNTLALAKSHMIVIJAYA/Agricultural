package com.met.dapm.Dao;

import java.util.Collection;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.met.dapm.model.Auction;

public interface AuctionRepository extends JpaRepository<Auction,Integer> {
	
	@Query(value =  "SELECT auctionid,vendorid,fpid,biddingprice,quantity,biddate FROM Auction  where vendorID = ?1 " ,nativeQuery = true)
	public Collection<Auction> getVendorBid(int id);
	
	@Query(value =  "Select auctionid,vendorid,fpid,biddingprice,quantity,biddate from auction where biddingprice =(Select max(biddingprice) from auction where fpid= ?1);" ,nativeQuery = true)
	public Collection<Auction> getMaxBidder(int fpid);
	
	Auction getByAuctionID(int id);
	
}
