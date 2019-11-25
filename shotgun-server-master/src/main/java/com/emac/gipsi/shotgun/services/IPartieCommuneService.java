package com.emac.gipsi.shotgun.services;

import java.util.Date;
import java.util.List;

import com.emac.gipsi.shotgun.dto.PartieCommuneDto;
import com.emac.gipsi.shotgun.dto.PartieCommuneShotgunDto;

public interface IPartieCommuneService {
	public List<PartieCommuneShotgunDto> getPartiesCommunes();

	public List<PartieCommuneShotgunDto> getPartiesCommunesDisponibles(Date dateDispo);

	public List<PartieCommuneDto> getPartiesCommunesWithShotguns();
}
