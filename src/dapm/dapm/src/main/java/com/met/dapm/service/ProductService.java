package com.met.dapm.service;

import java.util.Collection;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.met.dapm.Dao.FarmerProductRepository;
import com.met.dapm.model.Farmerproduct;

@Service
public class ProductService {
	
	@Autowired
	FarmerProductRepository farmerproductrepository;
	
public Collection<Farmerproduct> getproductByproductid(int id){
		
		return farmerproductrepository.getProductsByproductid(id)	;	
		}

}
