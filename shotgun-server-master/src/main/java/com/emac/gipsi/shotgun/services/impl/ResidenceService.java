package com.emac.gipsi.shotgun.services.impl;

import java.util.List;

import javax.transaction.Transactional;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.emac.gipsi.shotgun.model.Residence;
import com.emac.gipsi.shotgun.repositories.ResidenceRepository;
import com.emac.gipsi.shotgun.services.IResidenceService;

@Service("residenceService")
@Transactional
public class ResidenceService implements IResidenceService {

	@Autowired
	private ResidenceRepository residenceRepository;
	
	private final ModelMapper modelMapper = new ModelMapper();
	
	public ResidenceService(ResidenceRepository residenceRepository) {
		this.residenceRepository = residenceRepository;
	}
	
	@Override
	public List<Residence> getResidences() {
		// TODO Auto-generated method stub
		return null;
	}

}
