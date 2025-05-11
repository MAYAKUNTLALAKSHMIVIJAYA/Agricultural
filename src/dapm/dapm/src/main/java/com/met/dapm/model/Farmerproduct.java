package com.met.dapm.model;

import java.io.Serializable;
import java.sql.Date;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;

import javax.persistence.ManyToOne;


import com.met.dapm.model.Farmer;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity(name="FarmerProduct")
public class Farmerproduct implements Serializable {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	int fpid;
	Date orderdate;
	int quantity;
	String unit;
	

	
	@ManyToOne()
	@JoinColumn(name="farmerID")
	private Farmer farmerID;

	
	@ManyToOne()
	@JoinColumn(name="productID")
	private Products productID;
	
	@ManyToOne()
	@JoinColumn(name="categoryID")
	private Category categoryID;
	

	
	
	@ManyToOne()
	@JoinColumn(name="qualityID")
	private Quality qualityID;
	
	


	public Category getCategoryID() {
		return categoryID;
	}
	public void setCategoryID(Category categoryID) {
		this.categoryID = categoryID;
	}

	public int getFpid() {
		return fpid;
	}
	public Farmer getFarmerID() {
		return farmerID;
	}
	public void setFarmerID(Farmer farmerID) {
		this.farmerID = farmerID;
	}
	public void setFpid(int fpid) {
		this.fpid = fpid;
	}
	public Date getOrderdate() {
		return orderdate;
	}
	public void setOrderdate(Date orderdate) {
		this.orderdate = orderdate;
	}
	public int getQuantity() {
		return quantity;
	}
	public void setQuantity(int quantity) {
		this.quantity = quantity;
	}
	public String getUnit() {
		return unit;
	}
	public void setUnit(String unit) {
		this.unit = unit;
	}


	public Products getProductID() {
		return productID;
	}
	public void setProductID(Products productID) {
		this.productID = productID;
	}
	public Quality getQualityID() {
		return qualityID;
	}
	public void setQualityID(Quality qualityID) {
		this.qualityID = qualityID;
	}
	



	
	


	
	
	

}
