package com.met.dapm.controller;

import java.util.Collection;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.met.dapm.Credentials.Credentials;
import com.met.dapm.model.ContactUs;
import com.met.dapm.model.Farmer;
import com.met.dapm.service.FarmerService;

@RestController
@RequestMapping("/farmer")
@CrossOrigin
public class FarmerRestController {

	@Autowired
	FarmerService farmerService;
	
	
	
	@PostMapping("/login")
	public ResponseEntity<Farmer> authnticate(@RequestBody Credentials cred) {

		Farmer farmer = farmerService.authenticate(cred.getEmail(), cred.getPassword());
		System.out.println("farmer" + farmer + cred.getEmail() + cred.getPassword());
		System.out.println("emailId" + cred.getEmail());
		if (farmer == null)
			return null;
		return ResponseEntity.ok(farmer);
	}

	@GetMapping("/getAllfarmers")
	public ResponseEntity<Collection<Farmer>> AllFarmers() {
		Collection<Farmer> farmer = farmerService.getAllFarmers();
		return ResponseEntity.ok(farmer);
	}

	@PostMapping("/signup")
	public ResponseEntity<Farmer> saveFarmer(@RequestBody Farmer farmer) {
		farmerService.savefarmer(farmer);
		if (farmer != null) {
			return ResponseEntity.ok(farmer);
		}
		return null;

	}

	@PutMapping("/updatefarmer")
	public ResponseEntity<Farmer> updatefarmer(@RequestBody Farmer farmer) {

		farmerService.updatefarmer(farmer);
		if (farmer != null) {
			return ResponseEntity.ok(farmer);
		}
		return null;

	}

	@DeleteMapping("/deletefarmer/{id}")
	public ResponseEntity<?>delete(@PathVariable int id) {
	farmerService.deletefarmer(id);
		return ResponseEntity.ok(id);
	}

	@PostMapping("/forgot")
	public ResponseEntity<Farmer> forgot(@RequestBody Credentials cred) {

		Farmer farmer = farmerService.findByEmail(cred.getEmail(), cred.getPassword());

		if (farmer != null)
			return ResponseEntity.ok(farmer);
		return null;
	}
	
	@PostMapping("/savefeedback")
	public ResponseEntity<ContactUs> savefeedback(@RequestBody ContactUs contactUs){
		ContactUs cs = farmerService.savefeedback(contactUs);
		return ResponseEntity.ok(cs);
	}
	
	@GetMapping("/getfeedback")
	public Collection<ContactUs> getAllFeedbacks() {
		Collection<ContactUs> contactUs= farmerService.getFeedbacks();
		return contactUs;
	}
	
}
