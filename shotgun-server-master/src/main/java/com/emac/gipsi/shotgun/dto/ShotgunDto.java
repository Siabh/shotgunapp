package com.emac.gipsi.shotgun.dto;

import java.util.Date;

public class ShotgunDto {
	private int id;
	private String name;
	private Date shotgunDate;
	private Date shotgunCreationDate;
	private FamilleShotgunDto shotgunFamille;
	private PartieCommuneShotgunDto shotgunPlace;
	private String shotgunComments;

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
	 * @return the shotgunDate
	 */
	public Date getShotgunDate() {
		return shotgunDate;
	}

	/**
	 * @param shotgunDate
	 *            the shotgunDate to set
	 */
	public void setShotgunDate(Date shotgunDate) {
		this.shotgunDate = shotgunDate;
	}

	/**
	 * @return the shotgunCreationDate
	 */
	public Date getShotgunCreationDate() {
		return shotgunCreationDate;
	}

	/**
	 * @param shotgunCreationDate
	 *            the shotgunCreationDate to set
	 */
	public void setShotgunCreationDate(Date shotgunCreationDate) {
		this.shotgunCreationDate = shotgunCreationDate;
	}


	/**
	 * @return the shotgunFamille
	 */
	public FamilleShotgunDto getShotgunFamille() {
		return shotgunFamille;
	}

	/**
	 * @param shotgunFamille the shotgunFamille to set
	 */
	public void setShotgunFamille(FamilleShotgunDto shotgunFamille) {
		this.shotgunFamille = shotgunFamille;
	}

	/**
	 * @return the shotgunPlace
	 */
	public PartieCommuneShotgunDto getShotgunPlace() {
		return shotgunPlace;
	}

	/**
	 * @param shotgunPlace the shotgunPlace to set
	 */
	public void setShotgunPlace(PartieCommuneShotgunDto shotgunPlace) {
		this.shotgunPlace = shotgunPlace;
	}

	/**
	 * @return the shotgunComments
	 */
	public String getShotgunComments() {
		return shotgunComments;
	}

	/**
	 * @param shotgunComments
	 *            the shotgunComments to set
	 */
	public void setShotgunComments(String shotgunComments) {
		this.shotgunComments = shotgunComments;
	}
}
