package com.met.dapm.Dao;

import java.util.Collection;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.met.dapm.model.Products;

public interface ProductRepository extends JpaRepository<Products, Integer> {

	public Products findByproductName(String name);
	
	@Query(value="select productID,productName,categoryId,price,unit from products where categoryID=?1",nativeQuery = true)
	public Collection<Products> findByCategoryID(int id);

}
