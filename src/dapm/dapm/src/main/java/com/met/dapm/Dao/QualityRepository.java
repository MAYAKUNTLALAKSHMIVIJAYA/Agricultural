package com.met.dapm.Dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.met.dapm.model.Quality;



public interface QualityRepository extends JpaRepository<Quality,Integer> {
	
	Quality findById(int id);

}
