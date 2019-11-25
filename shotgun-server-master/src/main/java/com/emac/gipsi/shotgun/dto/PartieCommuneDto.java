package com.emac.gipsi.shotgun.dto;

import java.util.ArrayList;
import java.util.List;

public class PartieCommuneDto {
	private int id;
	private String name;
	private ResidenceDto localisation;
	private List<ShotgunDto> listeShotguns = new ArrayList<ShotgunDto>();

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
	 * @return the name
	 */
	public String getName() {
		return name;
	}

	/**
	 * @param name
	 *            the name to set
	 */
	public void setName(String name) {
		this.name = name;
	}

	/**
	 * @return the localisation
	 */
	public ResidenceDto getLocalisation() {
		return localisation;
	}

	/**
	 * @param localisation
	 *            the localisation to set
	 */
	public void setLocalisation(ResidenceDto localisation) {
		this.localisation = localisation;
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
