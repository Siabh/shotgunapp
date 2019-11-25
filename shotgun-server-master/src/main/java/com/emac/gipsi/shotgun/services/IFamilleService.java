package com.emac.gipsi.shotgun.services;

import java.util.List;

import com.emac.gipsi.shotgun.dto.FamilleDto;
import com.emac.gipsi.shotgun.dto.FamilleShotgunDto;

public interface IFamilleService {
	public List<FamilleShotgunDto> getFamilles();

	public FamilleShotgunDto getFamille(int id);
	
	public List<FamilleDto> getFamillesWithShotguns();
}
