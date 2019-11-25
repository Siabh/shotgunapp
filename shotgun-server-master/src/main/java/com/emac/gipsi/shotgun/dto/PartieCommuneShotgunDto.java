package com.emac.gipsi.shotgun.dto;

public class PartieCommuneShotgunDto {
	private int id;
	private String name;
	private ResidenceDto localisation;

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
}
