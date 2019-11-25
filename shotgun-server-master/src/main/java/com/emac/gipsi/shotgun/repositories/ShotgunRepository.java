package com.emac.gipsi.shotgun.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.emac.gipsi.shotgun.model.Shotgun;

@Repository
public interface ShotgunRepository extends JpaRepository<Shotgun, Integer>{
}
