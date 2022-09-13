package com.dvsuperior.dwvendas.service;



import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.dvsuperior.dwvendas.dto.SaleDTO;
import com.dvsuperior.dwvendas.entities.Sale;
import com.dvsuperior.dwvendas.repositories.SaleRepository;

@Service
public class SaleService {
	
	@Autowired
	private SaleRepository saleRepository;
	
	@Autowired
	private SellerService sellerService;
	
	@Transactional(readOnly = true)
	public Page<SaleDTO> findAll(Pageable pageable){
		sellerService.findAll();
		Page<Sale> result = saleRepository.findAll(pageable);
		return result.map(x -> new SaleDTO(x));
	}

}
