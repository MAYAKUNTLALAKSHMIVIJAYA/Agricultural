package com.met.dapm.Dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.met.dapm.model.Farmer;
import com.met.dapm.model.Vendor;

public interface VendorRepository extends JpaRepository<Vendor, Integer> {

	Vendor getByEmail(String email);
	
	Vendor findByVendorID(int id);

}
