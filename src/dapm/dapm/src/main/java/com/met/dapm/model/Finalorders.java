package com.met.dapm.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

@Entity(name="FinalOrders")
public class Finalorders {
	
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	int finalID;
	
	int auctionID;
	@ManyToOne
	@JoinColumn(name="vendorID")
	Vendor vendorID;
	
	@ManyToOne
	@JoinColumn(name="farmerID")
	Farmer farmerID;
	
	@ManyToOne
	@JoinColumn(name="fpid")
	Farmerproduct fpid;
	public Vendor getVendorID() {
		return vendorID;
	}
	public void setVendorID(Vendor vendorID) {
		this.vendorID = vendorID;
	}
	public Farmer getFarmerID() {
		return farmerID;
	}
	public void setFarmerID(Farmer farmerID) {
		this.farmerID = farmerID;
	}
	public Farmerproduct getFpid() {
		return fpid;
	}
	public void setFpid(Farmerproduct fpid) {
		this.fpid = fpid;
	}
	public int getFinalID() {
		return finalID;
	}
	public void setFinalID(int finalID) {
		this.finalID = finalID;
	}
	public int getAuctionID() {
		return auctionID;
	}
	public void setAuctionID(int auctionID) {
		this.auctionID = auctionID;
	}

}
