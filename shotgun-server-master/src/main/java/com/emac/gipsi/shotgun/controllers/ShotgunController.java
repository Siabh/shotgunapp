package com.emac.gipsi.shotgun.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.emac.gipsi.shotgun.dto.ShotgunDto;
import com.emac.gipsi.shotgun.dto.ShotgunFormDto;
import com.emac.gipsi.shotgun.services.IShotgunService;

@CrossOrigin
@RequestMapping("/shotguns")
@RestController
public class ShotgunController {
	@Autowired
	private IShotgunService shotgunService;

	@RequestMapping(path = "", method = RequestMethod.GET)
	public List<ShotgunDto> getShotguns() {
		return shotgunService.getShotguns();
	}


	@RequestMapping(path = "", method = RequestMethod.POST, consumes = { "application/json" })
	public ShotgunDto createShotgun(@RequestBody ShotgunFormDto shotgunToCreate) throws Exception {
		return shotgunService.createShotgun(shotgunToCreate);
	}


	@RequestMapping(path = "/{id}", method = RequestMethod.GET)
	public ShotgunDto getShotgunById(@PathVariable("id") int id) {
		return shotgunService.getShotgunById(id);
	}
}
