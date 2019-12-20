package com.emac.gipsi.shotgun.services.impl;

import java.lang.reflect.Type;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.util.List;

import javax.transaction.Transactional;

import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.emac.gipsi.shotgun.dto.FamilleDto;
import com.emac.gipsi.shotgun.dto.PartieCommuneDto;
import com.emac.gipsi.shotgun.dto.PartieCommuneShotgunDto;
import com.emac.gipsi.shotgun.dto.ResidenceDto;
import com.emac.gipsi.shotgun.dto.ShotgunDto;
import com.emac.gipsi.shotgun.model.PartieCommune;
import com.emac.gipsi.shotgun.model.Residence;

import com.emac.gipsi.shotgun.repositories.ResidenceRepository;
import com.emac.gipsi.shotgun.repositories.ShotgunRepository;
import com.emac.gipsi.shotgun.services.IResidenceService;

@Service("residenceService")
@Transactional
public class ResidenceService implements IResidenceService {
	private static final Logger logger = LoggerFactory.getLogger(ResidenceService.class);
	@Autowired
	private ResidenceRepository residenceRepository;
	
	@Autowired
	private ShotgunRepository shotgunRepository;
	
	private final ModelMapper modelMapper = new ModelMapper();
	
	public ResidenceService(ResidenceRepository residenceRepository ) {
		this.residenceRepository = residenceRepository;
	}
	
	@Override
	public List<Residence> getResidences() {
		
		Type listType = new TypeToken<List<ResidenceDto>>() {}.getType();
		List<Residence> result = modelMapper.map(residenceRepository.findAll(), listType);
		return result;
	}/*
	@Override
	public List<Residence> getResidencesShotgun() {
		Type listType = new TypeToken<List<Residence>>() {}.getType();
		List<Residence> list = modelMapper.map(residenceRepository.findAll(), listType);
		List<PartieCommuneShotgunDto> partiesCo = this.pc.getPartiesCommunes();
		
		for(int index=0;index<partiesCo.size();index++) {
			.getOne(1).getListeShotguns();
			if(list)
		}
		return result;
	}*/

	@Override
	public List<Residence> getResidencesShotgun() {
		
		return null;
	}
	

}
