package com.emac.gipsi.shotgun.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.emac.gipsi.shotgun.dto.FamilleDto;
import com.emac.gipsi.shotgun.dto.FamilleShotgunDto;
import com.emac.gipsi.shotgun.services.IFamilleService;

@CrossOrigin
@RequestMapping("/familles")
@RestController
public class FamilleController {

	@Autowired
	private IFamilleService familleService;
	
	@RequestMapping(path = "", method = RequestMethod.GET)
	public List<FamilleShotgunDto> getFamilies() {
		return familleService.getFamilles();
	}

	@RequestMapping(path = "/{id}", method = RequestMethod.GET)
	public FamilleShotgunDto getFamilleById(@PathVariable("id") int id) {
		return familleService.getFamille(id);
	}
	
	@RequestMapping(path ="/shotguns", method = RequestMethod.GET)
	public List<FamilleDto> getFamiliesWithShotguns() {
		return familleService.getFamillesWithShotguns();
	}
}
