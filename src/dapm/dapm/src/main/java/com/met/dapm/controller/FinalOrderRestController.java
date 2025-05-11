package com.met.dapm.controller;

import java.util.Collection;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.met.dapm.model.Auction;
import com.met.dapm.model.Farmerproduct;
import com.met.dapm.model.Finalorders;
import com.met.dapm.service.FinalordersService;

@RestController
@RequestMapping("/finalorder")
@CrossOrigin
public class FinalOrderRestController {
	
	@Autowired
	FinalordersService finalordersservice;
	
	@GetMapping("/getbyfid/{fid}")
	public ResponseEntity<Collection<Finalorders>> getFinalordByFid(@PathVariable int fid){
		
		return ResponseEntity.ok( finalordersservice.getFinalorderByFid(fid));
	}
	
	@GetMapping("/getbyvendorid/{vid}")
	public ResponseEntity<Collection<Finalorders>> getFinalordByVendorid(@PathVariable int vid){
		
		return ResponseEntity.ok( finalordersservice.getFinalorderByVendorid(vid));
	}
	
	@PostMapping(value="/savefinalorder", consumes=MediaType.APPLICATION_JSON_VALUE, produces=MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<Finalorders> savefinalorder(@RequestBody Finalorders finalorder){
		
		
		finalordersservice.saveFinalOrd(finalorder);
		
		return ResponseEntity.ok(finalorder);
		
	}

}
