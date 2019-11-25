package com.emac.gipsi.shotgun.dto;

import java.util.List;

import com.emac.gipsi.shotgun.model.Shotgun;
import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonManagedReference;

public class FamilleShotgunDto {
    private int    id;
    private String nomFamille;

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
}
