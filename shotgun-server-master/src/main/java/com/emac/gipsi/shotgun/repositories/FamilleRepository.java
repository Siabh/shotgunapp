package com.emac.gipsi.shotgun.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.emac.gipsi.shotgun.model.Famille;

public interface FamilleRepository extends JpaRepository<Famille, Integer> {
}
