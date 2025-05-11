package com.met.dapm.Dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.met.dapm.model.Category;



public interface CategoryRepository extends JpaRepository<Category,Integer> {

}
