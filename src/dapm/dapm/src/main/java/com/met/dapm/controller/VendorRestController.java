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
import org.springframework.web.bind.annotation.RestController;

import com.met.dapm.Credentials.Credentials;
import com.met.dapm.model.Vendor;
import com.met.dapm.service.VendorService;

@RestController
@RequestMapping("/vendor")
@CrossOrigin
public class VendorRestController {

	@Autowired
	VendorService vendorService;

	@PostMapping("/login")
	public ResponseEntity<Vendor> authnticate(@RequestBody Credentials cred) {

		Vendor Vendor = vendorService.authenticate(cred.getEmail(), cred.getPassword());
		System.out.println("Vendor" + Vendor + cred.getEmail() + cred.getPassword());
		System.out.println("emailId" + cred.getEmail());
		if (Vendor == null)
			return null;
		return ResponseEntity.ok(Vendor);
	}

	@GetMapping("/getAllvendors")
	public ResponseEntity<Collection<Vendor>> AllVendors() {
		Collection<Vendor> Vendor = vendorService.getAllVendors();
		return ResponseEntity.ok(Vendor);
	}

	@PostMapping("/signup")
	public ResponseEntity<Vendor> saveVendor(@RequestBody Vendor Vendor) {
		vendorService.saveVendor(Vendor);
		if (Vendor != null) {
			return ResponseEntity.ok(Vendor);
		}
		return null;

	}

	@PutMapping("/updatevendor")
	public ResponseEntity<Vendor> updateVendor(@RequestBody Vendor Vendor) {

		vendorService.updateVendor(Vendor);
		if (Vendor != null) {
			return ResponseEntity.ok(Vendor);
		}
		return null;

	}
     
	@CrossOrigin
	@DeleteMapping("/deletevendor/{id}")
	public ResponseEntity<?>delete(@PathVariable int id) {
	vendorService.deletevendor(id);
		return ResponseEntity.ok(id);
	}


	@PostMapping("/forgot")
	public ResponseEntity<Vendor> forgot(@RequestBody Credentials cred) {

		Vendor Vendor = vendorService.findByEmail(cred.getEmail(), cred.getPassword());

		if (Vendor != null)
			return ResponseEntity.ok(Vendor);
		return null;
	}

}
