package com.dvsuperior.dwvendas.service;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.dvsuperior.dwvendas.dto.SellerDTO;
import com.dvsuperior.dwvendas.entities.Seller;
import com.dvsuperior.dwvendas.repositories.SellerRepository;

@Service
public class SellerService {
	
	@Autowired
	private SellerRepository repository;
	
	
	public List<SellerDTO> findAll(){
		List<Seller> result =  repository.findAll();
		return result.stream().map(x -> new SellerDTO(x)).collect(Collectors.toList());
	}


	public SellerRepository getRepository() {
		return repository;
	}


	public void setRepository(SellerRepository repository) {
		this.repository = repository;
	}


	
	
	
	

}
