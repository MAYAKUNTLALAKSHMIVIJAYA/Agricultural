package com.met.dapm.service;

import java.util.Collection;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.met.dapm.Dao.VendorRepository;
import com.met.dapm.model.Farmer;
import com.met.dapm.model.Vendor;

@Service
@Transactional
public class VendorService implements VendorInterface {

	@Autowired
	VendorRepository vendorrepository;

	@Override
	public Vendor saveVendor(Vendor Vendor) {
		vendorrepository.save(Vendor);
		return Vendor;
	}

	@Override
	public Collection<Vendor> getAllVendors() {

		return vendorrepository.findAll();

	}

	@Override
	public Vendor authenticate(String email, String password) {
		Vendor Vendor = vendorrepository.getByEmail(email);
		System.out.println("authenticate" + vendorrepository.getByEmail(email));
		if (Vendor != null) {
			if (Vendor.getPassword().equals(password)) {
				System.out.println("athnticate" + Vendor);
				return Vendor;
			}
		}
		return null;
	}

	@Override
	public Vendor getByEmail(String Email) {
		return vendorrepository.getByEmail(Email);
	}

	@Override
	public Vendor findByEmail(String email, String password) {
		Vendor v = vendorrepository.getByEmail(email);
		if (v != null) {
			v.setPassword(password);
			return v;
		}
		return null;
	}

	@Override
	public Vendor updateVendor(Vendor vendor) {

		int id = vendor.getVendorID();
		Vendor f1 = vendorrepository.findById(id).get();
		f1.setFirstname(vendor.getFirstname());
		f1.setLastname(vendor.getLastname());
		f1.setEmail(vendor.getEmail());
		f1.setGender(vendor.getGender());
		f1.setDob(vendor.getDob());
		f1.setAadharno(vendor.getAadharno());
		f1.setMobileno(vendor.getMobileno());
		f1.setLicencenumber(vendor.getLicencenumber());
		f1.setApmc(vendor.getApmc());
		f1.setBankname(vendor.getBankname());
		f1.setBranchname(vendor.getBranchname());
		f1.setAccounttype(vendor.getAccounttype());
		f1.setAccountnumber(vendor.getAccountnumber());
		f1.setState(vendor.getState());
		f1.setAddress(vendor.getAddress());
		return vendorrepository.save(f1);
	}

     @Override
	public void deletevendor( int id) {

		Vendor vendor=vendorrepository.findByVendorID(id);
		vendorrepository.delete(vendor);
		System.out.println("deleted" +vendor);
	}
}
