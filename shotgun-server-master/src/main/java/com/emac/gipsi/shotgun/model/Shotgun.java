package com.emac.gipsi.shotgun.model;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Table;

@Entity
@Table(name = "Shotgun")
public class Shotgun {
	@Column
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Id
	private int id;
	
	@Column
	private String name;
	
	@Column
	private Date shotgunDate;
	
	@Column
	private Date shotgunCreationDate;
	
	@OneToOne(targetEntity = Famille.class)
	@JoinColumn
	private Famille shotgunFamille;
	
	@OneToOne(targetEntity = PartieCommune.class)
	@JoinColumn
	private PartieCommune shotgunPlace;
	
	@Column
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
	public Famille getShotgunFamille() {
		return shotgunFamille;
	}

	/**
	 * @param shotgunFamille
	 *            the shotgunFamille to set
	 */
	public void setShotgunFamille(Famille shotgunFamille) {
		this.shotgunFamille = shotgunFamille;
	}

	/**
	 * @return the shotgunPlace
	 */
	public PartieCommune getShotgunPlace() {
		return shotgunPlace;
	}

	/**
	 * @param shotgunPlace
	 *            the shotgunPlace to set
	 */
	public void setShotgunPlace(PartieCommune shotgunPlace) {
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
