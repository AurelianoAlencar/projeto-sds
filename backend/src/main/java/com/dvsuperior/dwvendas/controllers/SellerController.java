package com.dvsuperior.dwvendas.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.dvsuperior.dwvendas.dto.SellerDTO;
import com.dvsuperior.dwvendas.service.SellerService;

@RestController
@RequestMapping(value = "/sellers")
public class SellerController {
	
	@Autowired
	private SellerService service;
	
	
	@GetMapping
	public ResponseEntity<List<SellerDTO>> findAll(){
		
		List<SellerDTO> list = service.findAll();
		return ResponseEntity.ok(list);
		
		
		
	}


	public SellerService getService() {
		return service;
	}


	public void setService(SellerService service) {
		this.service = service;
	}
	
	
	

}
