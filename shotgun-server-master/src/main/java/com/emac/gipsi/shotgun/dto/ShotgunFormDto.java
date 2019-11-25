package com.emac.gipsi.shotgun.dto;

import java.util.Date;

public class ShotgunFormDto {
	private int id;
	private String name;
	private Date shotgunDate;
	private int shotgunFamille;
	private int shotgunPlace;
	private String shotgunComments;
	
	/**
	 * @return the id
	 */
	public int getId() {
		return id;
	}
	/**
	 * @param id the id to set
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
	 * @param name the name to set
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
	 * @param shotgunDate the shotgunDate to set
	 */
	public void setShotgunDate(Date shotgunDate) {
		this.shotgunDate = shotgunDate;
	}
	/**
	 * @return the shotgunFamille
	 */
	public int getShotgunFamille() {
		return shotgunFamille;
	}
	/**
	 * @param shotgunFamille the shotgunFamille to set
	 */
	public void setShotgunFamille(int shotgunFamille) {
		this.shotgunFamille = shotgunFamille;
	}
	/**
	 * @return the shotgunPlace
	 */
	public int getShotgunPlace() {
		return shotgunPlace;
	}
	/**
	 * @param shotgunPlace the shotgunPlace to set
	 */
	public void setShotgunPlace(int shotgunPlace) {
		this.shotgunPlace = shotgunPlace;
	}
	/**
	 * @return the shotgunComments
	 */
	public String getShotgunComments() {
		return shotgunComments;
	}
	/**
	 * @param shotgunComments the shotgunComments to set
	 */
	public void setShotgunComments(String shotgunComments) {
		this.shotgunComments = shotgunComments;
	}
}
