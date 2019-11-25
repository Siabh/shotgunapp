package com.emac.gipsi.shotgun.services.impl;

import java.lang.reflect.Type;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Optional;

import javax.transaction.Transactional;

import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.emac.gipsi.shotgun.dto.FamilleShotgunDto;
import com.emac.gipsi.shotgun.dto.ShotgunDto;
import com.emac.gipsi.shotgun.dto.ShotgunFormDto;
import com.emac.gipsi.shotgun.model.Famille;
import com.emac.gipsi.shotgun.model.PartieCommune;
import com.emac.gipsi.shotgun.model.Shotgun;
import com.emac.gipsi.shotgun.repositories.FamilleRepository;
import com.emac.gipsi.shotgun.repositories.PartieCommuneRepository;
import com.emac.gipsi.shotgun.repositories.ShotgunRepository;
import com.emac.gipsi.shotgun.services.IShotgunService;

@Service("shotgunService")
@Transactional
public class ShotgunService implements IShotgunService {

	@Autowired
	private final ShotgunRepository shotgunRepository;
	
	@Autowired
	private final FamilleRepository familleRepository;

	@Autowired
	private final PartieCommuneRepository partieCommuneRepository;
	
	private final ModelMapper modelMapper = new ModelMapper();

	public ShotgunService(ShotgunRepository shotgunRepository, 
			FamilleRepository familleRepository,
			PartieCommuneRepository partieCommuneRepository) {
		this.shotgunRepository = shotgunRepository;
		this.familleRepository = familleRepository;
		this.partieCommuneRepository = partieCommuneRepository;
	}

	@Override
	public List<ShotgunDto> getShotguns() {
		Type listType = new TypeToken<List<ShotgunDto>>() {}.getType();
		List<ShotgunDto> result = modelMapper.map(shotgunRepository.findAll(), listType);
		return result;
	}

	@Override
	public ShotgunDto getShotgunById(int id) {
		Optional<Shotgun> shotgun = shotgunRepository.findById(id);
		if (shotgun.isPresent()) {
			ShotgunDto result = new ShotgunDto();
			modelMapper.map(shotgun.get(), result);
			return result;
		}
		return null;
	}

	@Override
	public ShotgunDto createShotgun(ShotgunFormDto shotgunDto) throws Exception {
		this.validateShotgunInput(shotgunDto);
		
		Famille famille = this.familleRepository.findById(shotgunDto.getShotgunFamille()).get();
		PartieCommune partieCommune = this.partieCommuneRepository.findById(shotgunDto.getShotgunPlace()).get();
		
		Shotgun shotgunToCreate = new Shotgun();
		shotgunToCreate.setName(shotgunDto.getName());
		shotgunToCreate.setShotgunDate(shotgunDto.getShotgunDate());
		shotgunToCreate.setShotgunCreationDate(new Date());
		shotgunToCreate.setShotgunFamille(famille);
		shotgunToCreate.setShotgunPlace(partieCommune);
		shotgunToCreate.setShotgunComments(shotgunDto.getShotgunComments());
		
		famille.addToFamille(shotgunToCreate);
		partieCommune.addToPartieCommune(shotgunToCreate);
		
		ShotgunDto result = new ShotgunDto();
		modelMapper.map(this.shotgunRepository.save(shotgunToCreate), result);
		
		return result;
	}

	private void validateShotgunInput(ShotgunFormDto shotgunDto) throws Exception {
		if(shotgunDto.getName() == null || shotgunDto.getName().isEmpty()) {
			throw new Exception("Le nom du shotgun ne peut être vide.");
		}
		
		if(shotgunDto.getShotgunDate() == null) {
			throw new Exception("La date du shotgun ne peut être vide.");
		}
		
		if(shotgunDto.getShotgunFamille() < 1) {
			throw new Exception("La famille qui shotgun ne peut être vide.");
		}
		
		if(shotgunDto.getShotgunPlace() < 1) {
			throw new Exception("Le lieu du shotgun ne peut être vide.");
		}
	}
}
