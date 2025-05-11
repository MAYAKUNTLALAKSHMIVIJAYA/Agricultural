package com.met.dapm.service;

import java.util.Collection;

import com.met.dapm.model.Farmer;

public interface FarmerInterface {

	Farmer authenticate(String email, String password);

	Farmer getByEmail(String Email);

	Farmer savefarmer(Farmer farmer);

	Collection<Farmer> getAllFarmers();

	Farmer updatefarmer(Farmer farmer);

	void deletefarmer(int id);

	Farmer findByEmail(String email, String password);

}
