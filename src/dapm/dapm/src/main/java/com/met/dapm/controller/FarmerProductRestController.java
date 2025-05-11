package com.met.dapm.controller;

import java.util.Collection;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.met.dapm.model.Farmerproduct;
import com.met.dapm.model.Products;
import com.met.dapm.service.FarmerproductService;
import com.met.dapm.service.ProductService;

@RestController
@RequestMapping("/product")
@CrossOrigin
public class FarmerProductRestController {
	
	@Autowired
	FarmerproductService farmerproductService;
	
	@Autowired
	ProductService productService;
	
	
	@GetMapping("/getproducts/{id}")
	public ResponseEntity<Collection<Farmerproduct>> getProductByFID(@PathVariable int id){
		Collection<Farmerproduct> farmerproducts = farmerproductService.getfarmerproducts(id);
		return ResponseEntity.ok(farmerproducts);
	}

//	@GetMapping("/getproductsby")
//	public ResponseEntity<Collection<Products>> findByCategoryId(@RequestParam("categoryID") int categoryID){
//		
//		Collection<Products> products=productService.findByCategoryid(categoryID);
//		
//		return ResponseEntity.ok(products);
//		
//	}
	
	@PostMapping("/saveproduct")
	public ResponseEntity <Farmerproduct> saveProductBYFID(@RequestBody Farmerproduct farmerproduct){
		long millis=System.currentTimeMillis();  
		java.sql.Date date=new java.sql.Date(millis); 
				farmerproduct.setOrderdate(date);
		farmerproductService.saveFarmerProduct(farmerproduct);
		return ResponseEntity.ok(farmerproduct);
		
	}
	
	@DeleteMapping("/deletebyfpid/{id}")
	public ResponseEntity<Farmerproduct>deleteByFpid(@PathVariable int id){
		Farmerproduct farmerproduct= farmerproductService.deleteByFpid(id);
		return ResponseEntity.ok(farmerproduct);
	}
}
