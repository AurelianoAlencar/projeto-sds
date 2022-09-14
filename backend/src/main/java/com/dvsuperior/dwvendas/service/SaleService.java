package com.dvsuperior.dwvendas.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.dvsuperior.dwvendas.dto.SaleDTO;
import com.dvsuperior.dwvendas.dto.SaleSuccessDTO;
import com.dvsuperior.dwvendas.dto.SaleSumDTO;
import com.dvsuperior.dwvendas.entities.Sale;
import com.dvsuperior.dwvendas.repositories.SaleRepository;

@Service
public class SaleService {

	@Autowired
	private SaleRepository repository;

	@Autowired
	private SellerService sellerService;

	@Transactional(readOnly = true)
	public Page<SaleDTO> findAll(Pageable pageable) {
		sellerService.findAll();
		Page<Sale> result = repository.findAll(pageable);
		return result.map(x -> new SaleDTO(x));
	}

	@Transactional(readOnly = true)
	public List<SaleSumDTO> amountGroupdBySeller() {
		return repository.amountGroupedBySeller();

	}

	@Transactional(readOnly = true)
	public List<SaleSuccessDTO> successGroupedBySeller() {

		return repository.successGroupedBySeller();

	}

}
