package com.dvsuperior.dwvendas.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.dvsuperior.dwvendas.entities.Seller;

@Repository
public interface SellerRepository extends JpaRepository<Seller, Long> {
	
	
	

}
