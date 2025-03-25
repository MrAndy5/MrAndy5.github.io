package com.goleadores;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class GoleadorModelo {
    @Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    private Long id;
    private String nombre;
    private int goles;
    private String posicion;

    public GoleadorModelo(){}

    public GoleadorModelo(String nombre, int goles, String posicion){
        this.nombre = nombre;
        this.goles = goles;
        this.posicion = posicion;
    }

    public Long getId(){
        return id;
    }

    public void setId(Long id){
        this.id = id;
    }

    public String getNombre(){
        return nombre;
    }

    public void setNombre(String nombre){
        this.nombre = nombre;
    }

    public int getGoles(){
        return goles;
    }

    public void setGoles(int goles){
        this.goles = goles;
    }

    public String getPosicion(){
        return posicion;
    }

    public void setPosicion(String posicion){
        this.posicion = posicion;
    }

    
}
