package com.emac.gipsi.shotgun.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Table;

@Entity
@Table(name = "Eleve")
public class Eleve {
	@Column
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Id
	private int id;

	@Column
	private String nomEleve;

	@Column
	private String prenomEleve;

	@Column
	private Promotion promotion;

	@OneToOne(targetEntity = Famille.class)
	@JoinColumn
	private Famille famille;

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
	 * @return the nomEleve
	 */
	public String getNomEleve() {
		return nomEleve;
	}

	/**
	 * @param nomEleve
	 *            the nomEleve to set
	 */
	public void setNomEleve(String nomEleve) {
		this.nomEleve = nomEleve;
	}

	/**
	 * @return the prenomEleve
	 */
	public String getPrenomEleve() {
		return prenomEleve;
	}

	/**
	 * @param prenomEleve
	 *            the prenomEleve to set
	 */
	public void setPrenomEleve(String prenomEleve) {
		this.prenomEleve = prenomEleve;
	}

	/**
	 * @return the promotion
	 */
	public Promotion getPromotion() {
		return promotion;
	}

	/**
	 * @param promotion
	 *            the promotion to set
	 */
	public void setPromotion(Promotion promotion) {
		this.promotion = promotion;
	}

	/**
	 * @return the famille
	 */
	public Famille getFamille() {
		return famille;
	}

	/**
	 * @param famille
	 *            the famille to set
	 */
	public void setFamille(Famille famille) {
		this.famille = famille;
	}
}
