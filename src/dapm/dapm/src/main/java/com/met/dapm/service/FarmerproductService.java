package com.met.dapm.service;

import java.util.Collection;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.met.dapm.Dao.FarmerProductRepository;
import com.met.dapm.Dao.ProductRepository;
import com.met.dapm.Dao.QualityRepository;
import com.met.dapm.model.Farmerproduct;
import com.met.dapm.model.Products;
import com.met.dapm.model.Quality;

@Transactional
@Service
public class FarmerproductService {

	@Autowired
	ProductRepository productrepository;

	@Autowired
	QualityRepository qualityrepository;

	@Autowired
	FarmerProductRepository farmerproductrepository;

	
	public Quality findById(int id) {
		return qualityrepository.findById(id);
	}

	public Collection<Farmerproduct> getfarmerproducts(int id) {

		return farmerproductrepository.getfarmerproducts(id);

	}

public Farmerproduct saveFarmerProduct (Farmerproduct farmerproduct) {
		
		Farmerproduct f= farmerproductrepository.save(farmerproduct);
		
		return f;
		
	}

public Farmerproduct deleteByFpid(int id) {
	Farmerproduct farmerproduct =farmerproductrepository.getByFpid(id);
	farmerproductrepository.delete(farmerproduct);
	return farmerproduct;
}
}
