package com.emac.gipsi.shotgun.controllers;

import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.emac.gipsi.shotgun.dto.PartieCommuneDto;
import com.emac.gipsi.shotgun.dto.PartieCommuneShotgunDto;
import com.emac.gipsi.shotgun.services.IPartieCommuneService;
import com.emac.gipsi.shotgun.services.IResidenceService;
import com.emac.gipsi.shotgun.services.impl.ResidenceService;

@CrossOrigin
@RequestMapping("/parties-communes")
@RestController
public class PartieCommuneController {
	@Autowired
	private IPartieCommuneService partieCommuneService;
	

	
	private static final Logger logger = LoggerFactory.getLogger(ResidenceService.class);
	@RequestMapping(path = "", method = RequestMethod.GET)
	public List<PartieCommuneShotgunDto> getPartiesCommunnes() {
		return this.partieCommuneService.getPartiesCommunes();
	}
	
	@RequestMapping(path = "/shotguns", method = RequestMethod.GET)
	public List<PartieCommuneDto> getPartiesCommunesWithShotguns() {
		return this.partieCommuneService.getPartiesCommunesWithShotguns();
	}
}
