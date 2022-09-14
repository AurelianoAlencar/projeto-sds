package com.dvsuperior.dwvendas.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.dvsuperior.dwvendas.dto.SaleSuccessDTO;
import com.dvsuperior.dwvendas.dto.SaleSumDTO;
import com.dvsuperior.dwvendas.entities.Sale;

public interface SaleRepository  extends JpaRepository<Sale, Long> {

    
	@Query("SELECT new com.dvsuperior.dwvendas.dto.SaleSumDTO(obj.seller, SUM(obj.amount))"
			+ "FROM Sale AS obj GROUP BY obj.seller")
	public List<SaleSumDTO> amountGroupedBySeller();
      
  
	@Query("SELECT new com.dvsuperior.dwvendas.dto.SaleSuccessDTO (obj.seller, SUM(obj.visited),SUM(obj.deals)) "
			+ "FROM Sale AS obj GROUP BY obj.seller")
	public List<SaleSuccessDTO> successGroupedBySeller();
}
