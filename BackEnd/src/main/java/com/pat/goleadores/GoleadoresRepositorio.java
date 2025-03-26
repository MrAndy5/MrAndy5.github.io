package com.pat.goleadores;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface GoleadoresRepositorio extends JpaRepository<GoleadoresModel, Long> {
    GoleadoresModel findByNombre(String nombre);
    GoleadoresModel findByPosicion(String poscicion);
    GoleadoresModel findByGoles(int goles);

}
