package com.emac.gipsi.shotgun.model;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import org.hibernate.annotations.Fetch;
import org.hibernate.annotations.FetchMode;

@Entity
@Table(name = "PartieCommune")
public class PartieCommune {
	@Column
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Id
	private int id;

	@Column
	private String name;

	@OneToOne(targetEntity = Residence.class)
	@JoinColumn
	private Residence localisation;

	@OneToMany(fetch = FetchType.LAZY)
	@Fetch(value = FetchMode.SUBSELECT)
	@JoinColumn(name = "shotgunPlace")
	private Set<Shotgun> listeShotguns = new HashSet<Shotgun>();

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
	public Residence getLocalisation() {
		return localisation;
	}

	/**
	 * @param localisation
	 *            the localisation to set
	 */
	public void setLocalisation(Residence localisation) {
		this.localisation = localisation;
	}

	public void addToPartieCommune(Shotgun shotgun) {
		this.listeShotguns.add(shotgun);
		shotgun.setShotgunPlace(this);
	}

	/**
	 * @return the listeShotguns
	 */
	public Set<Shotgun> getListeShotguns() {
		return listeShotguns;
	}

	/**
	 * @param listeShotguns
	 *            the listeShotguns to set
	 */
	public void setListeShotguns(Set<Shotgun> listeShotguns) {
		this.listeShotguns = listeShotguns;
	}
}
