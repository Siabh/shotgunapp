package com.emac.gipsi.shotgun.dto;

import java.util.List;

public class FamilleDto {
	private int id;
	private String nomFamille;
	private List<ShotgunDto> listeShotguns;

	/**
	 * @return the id
	 */
	public int getId() {
		return id;
	}

	/**
	 * @param id
	 *            the id to set
	 */
	public void setId(int id) {
		this.id = id;
	}

	/**
	 * @return the nomFamille
	 */
	public String getNomFamille() {
		return nomFamille;
	}

	/**
	 * @param nomFamille
	 *            the nomFamille to set
	 */
	public void setNomFamille(String nomFamille) {
		this.nomFamille = nomFamille;
	}

	/**
	 * @return the listeShotguns
	 */
	public List<ShotgunDto> getListeShotguns() {
		return listeShotguns;
	}

	/**
	 * @param listeShotguns
	 *            the listeShotguns to set
	 */
	public void setListeShotguns(List<ShotgunDto> listeShotguns) {
		this.listeShotguns = listeShotguns;
	}
}
