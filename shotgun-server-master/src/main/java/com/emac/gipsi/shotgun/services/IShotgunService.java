package com.emac.gipsi.shotgun.services;

import java.util.List;

import com.emac.gipsi.shotgun.dto.ShotgunDto;
import com.emac.gipsi.shotgun.dto.ShotgunFormDto;

public interface IShotgunService {
	public List<ShotgunDto> getShotguns();
	public ShotgunDto getShotgunById(int id);
	public ShotgunDto createShotgun(ShotgunFormDto shotgunDto) throws Exception;
}
