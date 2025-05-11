package com.met.dapm.model;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity(name="contactus")
public class ContactUs {
	@Id
	private int cid;
	private String email;
	private String location;
	private String massage;
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getLocation() {
		return location;
	}
	public void setLocation(String location) {
		this.location = location;
	}
	public String getMassage() {
		return massage;
	}
	public void setMassage(String massage) {
		this.massage = massage;
	}
	public int getCid() {
		return cid;
	}
	public void setCid(int cid) {
		this.cid = cid;
	}
	
}
