package com.met.dapm.service;

import java.util.Collection;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.met.dapm.Dao.AuctionRepository;
import com.met.dapm.model.Auction;


@Service
public class AuctionService {
	
	@Autowired
	AuctionRepository auctionRepository;
	

	public Collection<Auction> getVendorBid(int id){
		
	return auctionRepository.getVendorBid(id);
		
	}
	
	public Auction saveBid(Auction bid)
	{
		
		return auctionRepository.save(bid);
	}
	
	public Collection<Auction>  getMaxBid(int fpid)
	{
		return auctionRepository.getMaxBidder(fpid);
	}
	
	public Auction deletebyaid(int id) {
		Auction auction = auctionRepository.getByAuctionID(id);
		auctionRepository.delete(auction);
		return auction;
				
	}

}
