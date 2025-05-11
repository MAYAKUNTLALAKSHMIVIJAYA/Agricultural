package com.met.dapm.service;


import java.util.Collection;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.met.dapm.Dao.FinalorderRepository;
import com.met.dapm.model.Auction;
import com.met.dapm.model.Farmerproduct;
import com.met.dapm.model.Finalorders;

@Service
public class FinalordersService {
	
	@Autowired
	FinalorderRepository finalorderrepository;
	
	
	public Collection<Finalorders>  getFinalorderByFid(int fid){
		
		return finalorderrepository.getFinalorderByFid(fid);
			
		}
	
		public  Collection<Finalorders> getFinalorderByVendorid(int vendorid){
		
		return finalorderrepository.getFinalorderByVendorid(vendorid);
			
		}
	
		public Finalorders saveFinalOrd(Finalorders finalbid)
		{
//			Finalorders finalord = new Finalorders();
//			finalord.setAuctionID(finalbid.getAuctionID());
//			finalord.setFpid(finalbid.getFpid());
//			finalord.setVendorID(finalbid.getVendorID());
			
			return finalorderrepository.save(finalbid);
			
			
		}

}
