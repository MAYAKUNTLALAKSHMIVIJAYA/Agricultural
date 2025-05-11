package com.met.dapm.controller;

import java.util.Collection;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.met.dapm.model.Farmerproduct;
import com.met.dapm.service.CategoryService;
import com.met.dapm.service.ProductService;
import com.met.dapm.service.Qualityservice;

@RestController
@RequestMapping("/search")
@CrossOrigin
public class ProductSearchRestController {
	
	@Autowired
	CategoryService categoryService;
	
	@Autowired
	Qualityservice qualityservice;
	
	@Autowired
	ProductService productservice;
	
	@GetMapping("/bycategory")
	public ResponseEntity<Collection<Farmerproduct>> getProductByCategory(@RequestParam ("categoryid") int categoryid){
		Collection<Farmerproduct> farmerproducts = categoryService.getproductBycategory(categoryid);
		return ResponseEntity.ok(farmerproducts);
	}
	
	@GetMapping("/byquality")
	public ResponseEntity<Collection<Farmerproduct>> getProductByQuality(@RequestParam ("qualityid") int qualityid ,@RequestParam ("categoryid") int categoryid){
		Collection<Farmerproduct> farmerproducts = qualityservice.getproductByquality(qualityid,categoryid);
		return ResponseEntity.ok(farmerproducts);
	}
	
	@GetMapping("/byproductname")
	public ResponseEntity<Collection<Farmerproduct>> getProductByProductid(@RequestParam ("productid") int productid){
		Collection<Farmerproduct> farmerproducts = productservice.getproductByproductid(productid);
		return ResponseEntity.ok(farmerproducts);
	}
	
	

}
