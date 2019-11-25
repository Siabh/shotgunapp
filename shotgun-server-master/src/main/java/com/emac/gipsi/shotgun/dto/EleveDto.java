package com.emac.gipsi.shotgun.dto;

import com.emac.gipsi.shotgun.model.Promotion;

public class EleveDto {
	private int id;
	private String nomEleve;
	private String prenomEleve;
	private Promotion promotion;
	private FamilleShotgunDto famille;

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
	public FamilleShotgunDto getFamille() {
		return famille;
	}

	/**
	 * @param famille
	 *            the famille to set
	 */
	public void setFamille(FamilleShotgunDto famille) {
		this.famille = famille;
	}
}
