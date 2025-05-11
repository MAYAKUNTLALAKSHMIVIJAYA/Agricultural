package com.met.dapm.model;


import javax.persistence.Entity;
import javax.persistence.Id;


@Entity
public class Quality {

	@Id
	private int qualityID;
	private String rating;
	private int increment;
	
	

	public Quality() {

	}
	

	public void setQualityID(int qualityID) {
		this.qualityID = qualityID;
	}


	public int getQualityID() {
		return qualityID;
	}

	public void setQualityId(int qualityId) {
		this.qualityID = qualityId;
	}

	public String getRating() {
		return rating;
	}

	public void setRating(String rating) {
		this.rating = rating;
	}

	public int getIncrement() {
		return increment;
	}

	public void setIncrement(int increment) {
		this.increment = increment;
	}

}
