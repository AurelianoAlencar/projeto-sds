package com.dvsuperior.dwvendas.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.dvsuperior.dwvendas.dto.SaleDTO;
import com.dvsuperior.dwvendas.service.SaleService;

@RestController
@RequestMapping(value = "/sales")
public class SaleController {

	@Autowired
	private SaleService saleservice;

	@GetMapping
	public ResponseEntity<Page<SaleDTO>> findAll(Pageable pageable) {

		Page<SaleDTO> list = saleservice.findAll(pageable);
		return ResponseEntity.ok(list);

	}

}
