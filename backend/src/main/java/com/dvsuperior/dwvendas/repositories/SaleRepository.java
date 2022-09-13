package com.dvsuperior.dwvendas.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.dvsuperior.dwvendas.entities.Sale;

public interface SaleRepository  extends JpaRepository<Sale, Long> {

	

}
