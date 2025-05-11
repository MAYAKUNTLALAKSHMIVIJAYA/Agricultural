package com.met.dapm.controller;

import java.util.Collection;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.met.dapm.model.Auction;
import com.met.dapm.model.Farmer;
import com.met.dapm.model.Farmerproduct;
import com.met.dapm.service.AuctionService;

@RestController
@RequestMapping("/auction")
@CrossOrigin
public class AuctionRestController {
	
	@Autowired
	AuctionService auctionService;
	
	
	@GetMapping("/getbids/{vid}")
	public ResponseEntity<Collection<Auction>> getBidById(@PathVariable int vid){
		Collection<Auction>vendorbids =auctionService.getVendorBid(vid);
		return ResponseEntity.ok(vendorbids);
	}
	

	@PostMapping(value="/savebid", consumes=MediaType.APPLICATION_JSON_VALUE, produces=MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<Auction> saveBid(@RequestBody Auction bid){
		long millis=System.currentTimeMillis();  
		java.sql.Date date=new java.sql.Date(millis); 
		bid.setBiddate(date);		
		auctionService.saveBid(bid);
		
		return ResponseEntity.ok(bid);
		
	}
	
	@GetMapping("/getmaxbidders/{id}")
	public ResponseEntity<Collection<Auction>> getmaxBidders(@PathVariable int id){
		Collection<Auction> maxbidders =auctionService.getMaxBid(id);
		return ResponseEntity.ok(maxbidders);
	}
	
	@DeleteMapping("/deletebyaid/{id}")
	public ResponseEntity<Auction> deleteByAid(@PathVariable int id){
		
		Auction auction=auctionService.deletebyaid(id); 
		return ResponseEntity.ok(auction);
		
		
	}
	

}
