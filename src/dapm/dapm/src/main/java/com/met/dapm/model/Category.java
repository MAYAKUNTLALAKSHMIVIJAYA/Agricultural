package com.met.dapm.model;


import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;


@Entity(name = "category")
public class Category {

	@Id
	private int categoryID;
	@Column(name = "Cat_Type")
	private String cattype;

	

	public int getCategoryID() {
		return categoryID;
	}

	public void setCategoryID(int categoryID) {
		this.categoryID = categoryID;
	}

	public String getCattype() {
		return cattype;
	}

	public void setCattype(String cattype) {
		this.cattype = cattype;
	}

}
