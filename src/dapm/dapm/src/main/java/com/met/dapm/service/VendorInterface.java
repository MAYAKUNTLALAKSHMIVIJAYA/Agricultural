package com.met.dapm.service;

import java.util.Collection;

import com.met.dapm.model.Vendor;

public interface VendorInterface {

	Vendor authenticate(String email, String password);

	Vendor getByEmail(String Email);

	Vendor saveVendor(Vendor Vendor);

	Collection<Vendor> getAllVendors();

	Vendor updateVendor(Vendor Vendor);

	public void deletevendor( int id);
	
	Vendor findByEmail(String email, String password);

}
