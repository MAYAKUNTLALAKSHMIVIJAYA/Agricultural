package com.met.dapm.model;


import java.sql.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

@Entity(name="Auction")
public class Auction {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int auctionID;
	
	@ManyToOne
	@JoinColumn(name="vendorID")
	private Vendor vendorID;
	
	@ManyToOne
	@JoinColumn(name="fpid")
	private Farmerproduct fpid;
	
	private double biddingprice;
	private int quantity;
	private Date biddate;
	
	public int getAuctionID() {
		return auctionID;
	}
	public void setAuctionID(int auctionID) {
		this.auctionID = auctionID;
	}

	public Vendor getVendorID() {
		return vendorID;
	}
	public void setVendorID(Vendor vendorID) {
		this.vendorID = vendorID;
	}
	public Date getBiddate() {
		return biddate;
	}
	public void setBiddate(Date biddate) {
		this.biddate = biddate;
	}
	
	public Farmerproduct getFpid() {
		return fpid;
	}
	public void setFpid(Farmerproduct fpid) {
		this.fpid = fpid;
	}
	public double getBiddingprice() {
		return biddingprice;
	}
	public void setBiddingprice(double biddingprice) {
		this.biddingprice = biddingprice;
	}
	public int getQuantity() {
		return quantity;
	}
	public void setQuantity(int quantity) {
		this.quantity = quantity;
	}
	public Date getDate() {
		return biddate;
	}
	public void setDate(Date date) {
		this.biddate = date;
	}
	
	
}

