package com.emac.gipsi.shotgun.services.impl;

import java.lang.reflect.Type;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import javax.transaction.Transactional;

import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.emac.gipsi.shotgun.dto.FamilleDto;
import com.emac.gipsi.shotgun.dto.FamilleShotgunDto;
import com.emac.gipsi.shotgun.model.Famille;
import com.emac.gipsi.shotgun.repositories.FamilleRepository;
import com.emac.gipsi.shotgun.services.IFamilleService;

@Service("familleService")
@Transactional
public class FamilleService implements IFamilleService {

	@Autowired
	private final FamilleRepository familleRepository;

	private final ModelMapper modelMapper = new ModelMapper();

	public FamilleService(FamilleRepository familleRepository) {
		this.familleRepository = familleRepository;
	}

	@Override
	public List<FamilleShotgunDto> getFamilles() {
		Type listType = new TypeToken<List<FamilleShotgunDto>>() {}.getType();
		List<FamilleShotgunDto> result = modelMapper.map(familleRepository.findAll(), listType);
		return result;
	}

	@Override
	public FamilleShotgunDto getFamille(int id) {
		Optional<Famille> famille = familleRepository.findById(id);
		if (famille.isPresent()) {
			FamilleShotgunDto result = new FamilleShotgunDto();
			modelMapper.map(famille.get(), result);
			return result;
		}

		return null;
	}

	@Override
	public List<FamilleDto> getFamillesWithShotguns() {
		Type listType = new TypeToken<List<FamilleDto>>() {}.getType();
		List<FamilleDto> result = modelMapper.map(familleRepository.findAll(), listType);
		return result;
	}
}
