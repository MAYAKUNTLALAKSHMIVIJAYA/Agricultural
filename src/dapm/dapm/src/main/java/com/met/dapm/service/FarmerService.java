package com.met.dapm.service;

import java.util.Collection;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.GetMapping;

import com.met.dapm.Dao.ContactUsRepository;
import com.met.dapm.Dao.FarmerRepository;
import com.met.dapm.model.ContactUs;
import com.met.dapm.model.Farmer;

@Service
@Transactional
public class FarmerService implements FarmerInterface {

	@Autowired
	FarmerRepository farmerrepository;
	 
	@Autowired
	 ContactUsRepository contactUsRepository;
	 
	
	@Override
	public Farmer savefarmer(Farmer farmer) {

		farmerrepository.save(farmer);
		return farmer;
	}

	@Override
	public Collection<Farmer> getAllFarmers() {

		System.out.println("employeeRepository: " + farmerrepository.getClass());

		return farmerrepository.findAll();

	}
	
	

	@Override
	public Farmer updatefarmer(Farmer farmer) {
		// Farmer f1 = farmerrepository.findByEmail( email);
		int id = farmer.getFarmerID();
		Farmer f1 = farmerrepository.findById(id).get();
		f1.setFirstname(farmer.getFirstname());
		f1.setLastname(farmer.getLastname());
		f1.setEmail(farmer.getEmail());
		f1.setGender(farmer.getGender());
		f1.setDob(farmer.getDob());
		f1.setAadharno(farmer.getAadharno());
		f1.setMobileno(farmer.getMobileno());
		f1.setLicencenumber(farmer.getLicencenumber());
		f1.setApmc(farmer.getApmc());
		f1.setBankname(farmer.getBankname());
		f1.setBranchname(farmer.getBranchname());
		f1.setAccounttype(farmer.getAccounttype());
		f1.setAccountnumber(farmer.getAccountnumber());
		f1.setState(farmer.getState());
		f1.setAddress(farmer.getAddress());
		return farmerrepository.save(f1);

	}

	@Override
	public void deletefarmer( int id) {

		Farmer farmer=farmerrepository.findByFarmerID(id);
		farmerrepository.delete(farmer);
		System.out.println("deleted" +farmer);
	}

	@Override
	public Farmer getByEmail(String Email) {

		return farmerrepository.getByEmail(Email);
	}

	@Override
	public Farmer findByEmail(String email, String password) {
		Farmer f = farmerrepository.getByEmail(email);
		if (f != null) {
			f.setPassword(password);
			System.out.println("new pass" + f.getPassword());
			return f;
		}
		return null;
	}

	@Override
	public Farmer authenticate(String email, String password) {
		Farmer farmer = farmerrepository.getByEmail(email);
		System.out.println("authenticate" + farmerrepository.getByEmail(email));
		if (farmer != null) {
			if (farmer.getPassword().equals(password)) {
				System.out.println("athnticate" + farmer.getPassword());
				return farmer;
			}
		}
		return null;
	}
	
	public ContactUs savefeedback(ContactUs contactUs) {
		ContactUs cs=contactUsRepository.save(contactUs);
		return cs;
	}

	
	public Collection<ContactUs> getFeedbacks(){
		return contactUsRepository.findAll();
		}
}
