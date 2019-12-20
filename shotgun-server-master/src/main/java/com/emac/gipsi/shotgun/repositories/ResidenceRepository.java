package com.emac.gipsi.shotgun.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.emac.gipsi.shotgun.model.Residence;

public interface ResidenceRepository extends JpaRepository<Residence, Integer> {
	
}
